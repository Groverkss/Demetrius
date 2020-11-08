import React, { useState } from "react";
import { Container, Input, Button, Form, Badge } from "reactstrap";

import axios from "axios";

import InMessage from "./InMessage";
import OutMessage from "./OutMessage";

export default ({ setContent, setLoading }) => {
    // sample content {{{
    const sample = [
        {
            title: "SanDisk 32GB Cruzer Glide USB 2.0 Flash Drive - SDCZ60-032G-AW46",
            url:
                "https://www.walmart.com/ip/SanDisk-32GB-Cruzer-Glide-USB-2-0-Flash-Drive-SDCZ60-032G-AW46/23350716",
            price: "$9.99",
            stars: "4.6",
            ratings: "368 ",
            img: "",
            tags: [
                [
                    "Premium Chrome OS",
                    "/browse/electronics/premium-chrome-os/3944_3951_4991337_4954263_2356212",
                ],
                [
                    "Micro SD Cards",
                    "/browse/electronics/micro-sd-cards/3944_133277_132913_63988_4590075",
                ],
                [
                    "Hard Drives & Storage",
                    "/browse/electronics/hard-drives-storage/3944_3951_1073804_514537",
                ],
                ["SD Cards", "/browse/electronics/sd-cards/3944_133277_132913_63988_5930264"],
                [
                    "Premium Google Computers",
                    "/browse/electronics/premium-google-computers/3944_3951_4991337_5933389_8512993",
                ],
                [
                    "onn. Computer Accessories",
                    "/browse/electronics/onn-computer-accessories/3944_7838866_3004279_2376133_9826274",
                ],
            ],
        },
        {
            title: "Canon PIXMA MG2522 Wired All-in-One Color Inkjet Printer",
            url:
                "https://www.walmart.com/ip/Canon-PIXMA-MG2522-Wired-All-in-One-Color-Inkjet-Printer/108208974",
            price: "$34.88",
            stars: "3.9",
            ratings: "2414 ",
            img: "",
            tags: [
                [
                    "Canon Holiday Printers",
                    "/browse/electronics/canon-holiday-printers/3944_3951_37807_163957_1326920",
                ],
                ["Printer Ink", "/browse/electronics/printer-ink/3944_3951_37807_133104"],
                [
                    "Inkjet Printers",
                    "/browse/electronics/inkjet-printers/3944_3951_37807_163957_2713574",
                ],
                [
                    "HP Printer Ink and Toner",
                    "/browse/electronics/hp-printer-ink-toner/3944_4131277_7559616_3252233",
                ],
                [
                    "All-in-One Printers",
                    "/browse/electronics/all-in-one-printers/3944_3951_37807_163957_4175270",
                ],
                ["HP Printers", "/browse/electronics/hp-printers/3944_4131277_7559616_4218181"],
                ["Canon", "/browse/electronics/canon/3944_4131277_7135121"],
                [
                    "Canon Printer",
                    "/browse/electronics/canon-printer/3944_3951_37807_163957_7855987",
                ],
            ],
        },
        {
            title:
                "Roku Streaming Stick+ HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls",
            url:
                "https://www.walmart.com/ip/Roku-Streaming-Stick-HD-4K-HDR-Streaming-Device-with-Long-range-Wireless-and-Voice-Remote-with-TV-Controls/300825724",
            price: "$37.00",
            stars: "4.6",
            ratings: "5602 ",
            img:
                "i5.walmartimages.com/asr/ccb9cdad-fc64-4e76-b44b-c126af9b06fa.55e6285595f7367aed18b9c923eef84f.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
            tags: [
                [
                    "Streaming Devices",
                    "/browse/electronics/streaming-devices/3944_77622_7549938_1229631_1085065",
                ],
                ["Smart TVs", "/browse/electronics/smart-tvs/3944_1060825_1229815_1229817"],
                [
                    "Roku Express",
                    "/browse/electronics/roku-express/3944_77622_7549938_1229631_1430926",
                ],
                [
                    "Only at Walmart Electronics",
                    "/browse/electronics/only-at-walmart-electronics/3944_7838866_7148103",
                ],
                ["Roku Ultra", "/browse/electronics/roku-ultra/3944_77622_7549938_1229631_7205812"],
                ["Roku", "/browse/electronics/roku/3944_4131277_8296010"],
                ["Roku TVs", "/browse/electronics/roku-tvs/3944_1060825_1229815_9085580"],
                [
                    "Roku Streaming Stick",
                    "/browse/electronics/roku-streaming-stick/3944_77622_7549938_1229631_9177705",
                ],
            ],
        },
        {
            title:
                "Apple Lightning Digital AV Adapter - Lightning to HDMI adapter - HDMI / Lightning",
            url:
                "https://www.walmart.com/ip/Apple-Lightning-Digital-AV-Adapter-Lightning-to-HDMI-adapter-HDMI-Lightning/44705398",
            price: "$39.00",
            stars: "4.5",
            ratings: "445 ",
            img:
                "i5.walmartimages.com/asr/3aa985e3-58ac-4b83-a9e1-7bd5d0f94ebf_1.ba8b57a09865eab4b888781e98cfd432.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
            tags: [
                [
                    "Digital TV Converters",
                    "/browse/electronics/digital-tv-converters/3944_1060825_133270_1070524",
                ],
                [
                    "Speaker Cables & Connectors",
                    "/browse/electronics/speaker-cables-connectors/3944_77622_8375901_1230415_1230431_1076626",
                ],
                [
                    "All Tablet Accessories",
                    "/browse/electronics/all-tablet-accessories/3944_1078524_1225368_1087422",
                ],
                ["Apple Accessories", "/browse/electronics/apple-accessories/3944_1229722_1230413"],
                [
                    "HDMI Cables",
                    "/browse/electronics/hdmi-cables/3944_1060825_133270_7412812_3534100",
                ],
                [
                    "TV Cables & Connectors",
                    "/browse/electronics/tv-cables-connectors/3944_1060825_133270_4537",
                ],
                [
                    "Cables, Adapters, & Chargers",
                    "/browse/electronics/cables-adapters-chargers/3944_1078524_1225368_5562682",
                ],
            ],
        },
        {
            title: "HP 61 Ink Cartridges - Black, Tri-color, 2 Cartridges (CR259FN)",
            url:
                "https://www.walmart.com/ip/HP-61-Ink-Cartridges-Black-Tri-color-2-Cartridges-CR259FN/15084439",
            price: "$45.99",
            stars: "4.6",
            ratings: "2542 ",
            img: "",
            tags: [
                [
                    "HP Printer Ink and Toner",
                    "/browse/electronics/hp-printer-ink-toner/3944_4131277_7559616_3252233",
                ],
                [
                    "All-in-One Printers",
                    "/browse/electronics/all-in-one-printers/3944_3951_37807_163957_4175270",
                ],
                ["HP Printers", "/browse/electronics/hp-printers/3944_4131277_7559616_4218181"],
                [
                    "Canon Back to School Printers",
                    "/browse/electronics/canon-back-to-school-printers/3944_3951_37807_163957_6303916",
                ],
                ["Canon", "/browse/electronics/canon/3944_4131277_7135121"],
                [
                    "Canon Printer",
                    "/browse/electronics/canon-printer/3944_3951_37807_163957_7855987",
                ],
                [
                    "HP Standard Yield Printer Ink Cartridge",
                    "/browse/electronics/hp-standard-yield-printer-ink-cartridge/3944_3951_37807_8789020",
                ],
            ],
        },
        {
            title: "Apple Pencil (1st Generation)",
            url: "https://www.walmart.com/ip/Apple-Pencil-1st-Generation/47362890",
            price: "$94.88",
            stars: "4.6",
            ratings: "456 ",
            img: "",
            tags: [
                ["All Tablets", "/browse/electronics/all-tablets/3944_1078524_1078084"],
                [
                    "iPad Cases, Sleeves & Bags",
                    "/browse/electronics/ipad-cases-sleeves-bags/3944_1078524_1084930_1084887",
                ],
                ["Stylus Pens", "/browse/electronics/stylus-pens/3944_1078524_1225368_2858431"],
                ["Apple", "/browse/electronics/apple/3944_4131277_4253599"],
                ["Electronics Tax Time", "/browse/electronics-tax-time/3944_4439225"],
                ["Keyboards", "/browse/electronics/keyboards/3944_1078524_1225368_7296243"],
                ["Cases", "/browse/electronics/cases/3944_1078524_1225368_9395320"],
            ],
        },
        {
            title:
                'onn. Full-Motion Articulating, Tilt/Swivel, Universal Wall Mount Kit for 19" to 84" TVs with HDMI Cable (ONA16TM014E)',
            url:
                "https://www.walmart.com/ip/onn-Full-Motion-Articulating-Tilt-Swivel-Universal-Wall-Mount-Kit-for-19-to-84-TVs-with-HDMI-Cable-ONA16TM014E/55836008",
            price: "$47.96",
            stars: "4.6",
            ratings: "5114 ",
            img:
                "i5.walmartimages.com/asr/c158c50f-e55f-4282-9e20-85ad40e391c5_1.eb2367b6b9ef13e887c360b69f10e007.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
            tags: [
                ["Smart TVs", "/browse/electronics/smart-tvs/3944_1060825_1229815_1229817"],
                ["All Vizio TVs", "/browse/electronics/all-vizio-tvs/3944_1060825_2044181_5198414"],
                [
                    "VIZIO Smart TVs",
                    "/browse/electronics/vizio-smart-tvs/3944_1060825_7985618_5794698",
                ],
                ["TV Mounts", "/browse/electronics/tv-mounts/3944_1060825_133270_581514"],
                ["4K HDR TVs", "/browse/electronics/4k-hdr-tvs/3944_1060825_1229815_6853163"],
                ["Roku TVs", "/browse/electronics/roku-tvs/3944_1060825_1229815_9085580"],
                [
                    "Shop All onn.",
                    "/browse/electronics/shop-all-onn/3944_7838866_3004279_2376133_9354764",
                ],
                [
                    "Samsung UHD Smart TVs",
                    "/browse/electronics/samsung-uhd-smart-tvs/3944_1060825_2044181_2603009_4838636_9548238",
                ],
            ],
        },
        {
            title: "Logitech C270 HD WEBCAM All the essentials for HD 720p video calling",
            url:
                "https://www.walmart.com/ip/Logitech-C270-HD-WEBCAM-All-the-essentials-for-HD-720p-video-calling/17616997",
            price: "$27.47",
            stars: "4.4",
            ratings: "432 ",
            img:
                "i5.walmartimages.com/asr/57a51f92-5fd6-4845-ac22-28cfc4fc767d_1.56ccbd82dbdca1e116a2154f476fb7e9.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
            tags: [
                [
                    "Surveillance Cameras",
                    "/browse/electronics/surveillance-cameras/3944_133277_1224850",
                ],
                ["Nintendo", "/browse/electronics/nintendo/3944_4131277_3137068"],
                ["Surveillance Equipment", "/browse/surveillance-equipment/3944_47600"],
                [
                    "Indoor Security Cameras",
                    "/browse/electronics/indoor-security-cameras/3944_1229875_6357978_5718781_9232158_4993152",
                ],
                [
                    "Smart Security Cameras",
                    "/browse/electronics/smart-security-cameras/3944_1229875_6357978_5718781_9232158_7064887",
                ],
                [
                    "Webcams",
                    "/browse/electronics/webcams/3944_1229875_6357978_5718781_9232158_7208431",
                ],
            ],
        },
        {
            title: "QualGear 10' High-Speed HDMI 2.0 Cable with Ethernet",
            url:
                "https://www.walmart.com/ip/QualGear-10-High-Speed-HDMI-2-0-Cable-with-Ethernet/46164767",
            price: "$5.95",
            stars: "4.6",
            ratings: "227 ",
            img:
                "i5.walmartimages.com/asr/918f8ef3-7a32-4258-ba0c-5ab9c716488c_1.6d1253cb023dc6ce36a843f41858b5b0.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
            tags: [
                [
                    "Speaker Cables & Connectors",
                    "/browse/electronics/speaker-cables-connectors/3944_77622_8375901_1230415_1230431_1076626",
                ],
                ["LED TVs", "/browse/electronics/led-tvs/3944_1060825_1229815_1229821"],
                [
                    "HDMI Cables",
                    "/browse/electronics/hdmi-cables/3944_1060825_133270_7412812_3534100",
                ],
                ["Sceptre TVs", "/browse/electronics/sceptre-tvs/3944_1060825_1939756_5735890"],
                [
                    "onn. TV & Video Accessories",
                    "/browse/electronics/onn-tv-video-accessories/3944_7838866_3004279_2376133_9766217_6428762",
                ],
                [
                    "1080 Resolution HDTVs",
                    "/browse/electronics/1080-resolution-hdtvs/3944_1060825_3289709_7918505",
                ],
                ["Sceptre", "/browse/electronics/sceptre/3944_4131277_9297591"],
                [
                    "DVD & Blu-ray Players",
                    "/browse/electronics/dvd-blu-ray-players/3944_77622_7549938_1229631_95987",
                ],
            ],
        },
        {
            title:
                'Ematic Full-Motion Articulating, Tilt/Swivel, Universal Wall Mount for 17"- 55" TVs with 6-Foot HDMI Cable',
            url:
                "https://www.walmart.com/ip/Ematic-Full-Motion-Articulating-Tilt-Swivel-Universal-Wall-Mount-for-17-55-TVs-with-6-Foot-HDMI-Cable/46470585",
            price: "$24.96",
            stars: "4.4",
            ratings: "1379 ",
            img: "",
            tags: [
                [
                    "4K Ultra HDTVs",
                    "/browse/electronics/4k-ultra-hdtvs/3944_1060825_3289709_1180168",
                ],
                ["LED TVs", "/browse/electronics/led-tvs/3944_1060825_1229815_1229821"],
                ["All TVs", "/browse/electronics/all-tvs/3944_1060825_447913"],
                ["Sceptre TVs", "/browse/electronics/sceptre-tvs/3944_1060825_1939756_5735890"],
                [
                    "onn. TV & Video Accessories",
                    "/browse/electronics/onn-tv-video-accessories/3944_7838866_3004279_2376133_9766217_6428762",
                ],
                ["Roku TVs", "/browse/electronics/roku-tvs/3944_1060825_1229815_9085580"],
                ["Sceptre", "/browse/electronics/sceptre/3944_4131277_9297591"],
                [
                    "Shop All onn.",
                    "/browse/electronics/shop-all-onn/3944_7838866_3004279_2376133_9354764",
                ],
            ],
        },
    ];
    // }}}

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
                "/chat/",
                { input: input },
                { headers: { "Content-Type": "application/json" } }
            );
            console.log(res);

            if (res.data.message !== "") {
                setMessages([
                    ...newHistory,
                    { id: newHistory.length + 1, type: "in", content: res.data.message },
                ]);
            }
            setPredictions(res.data.predictions);
            setContent(res.data.objs);
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
