import React, { useState } from "react";
import { Container, Input, Button, Form, Badge } from "reactstrap";

import axios from "axios";

import InMessage from "./InMessage";
import OutMessage from "./OutMessage";

export default ({ setContent, setLoading }) => {

    const sample = []

    const [typing, setTyping] = useState(false);
    const [input, setInput] = useState("");
    const [predictions, setPredictions] = useState([]);
    const [messages, setMessages] = useState([
        {
            id: 0,
            type: "in",
            content: "Hello there! How may I help you today?",
        },
    ]);

    const sendMessage = (e) => {
        e.preventDefault();
        if (input === "") return;

        setTimeout(() => {
            setTyping(true);
            setLoading(true);
        }, 80);

        const newHistory = [...messages, { id: messages.length + 1, type: "out", content: input }];
        setMessages(newHistory);

        // send input to server; update message list and setContent from response
        setTimeout(async () => {
            const res = await axios.post(
                "/chat",
                { input: input },
                { headers: { "Content-Type": "application/json" } }
            );
            console.log(res);

            if (res.data !== "") {
                setMessages([
                    ...newHistory,
                    { id: newHistory.length + 1, type: "in", content: res.data.text },
                ]);
            }
            // setContent(res.data);
            
            setTyping(false);
            setLoading(false);
        }, 1000);

        setInput("");
    };

    return (
        <Container fluid className="d-flex flex-column chatbar justify-content-between py-3">
            <Container fluid className="overflow-auto mb-4 message-container">
                {messages.map((message) =>
                    message.type === "in" ? (
                        <InMessage key={message.id} {...message} />
                    ) : (
                        <OutMessage key={message.id} {...message} />
                    )
                )}
                {typing ? <InMessage typing /> : null}
            </Container>
            <Container fluid className="px-0">
                <Form className="d-flex flex-row" onSubmit={sendMessage}>
                    <Input
                        autoFocus
                        disabled={typing}
                        type="text"
                        value={input}
                        placeholder="Type a message..."
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button color="dark" className="ml-2 d-flex flex-column justify-content-center">
                        <img src="/send-white-18dp.svg" alt="Send" />
                    </Button>
                </Form>
                {predictions.length ? (
                    <div className="mt-2">
                        <div className="m-1"> Related keywords: </div>
                        {predictions.map((p) => (
                            <Badge color="dark" className="m-1 p-2">
                                {p}
                            </Badge>
                        ))}
                    </div>
                ) : null}
            </Container>
        </Container>
    );
};
