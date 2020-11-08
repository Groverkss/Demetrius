import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, CardImg, } from "reactstrap";
import FadeIn from "react-fade-in";

import Chat from "../components/Chat";
import Loading from "../components/Loading";
import Greeting from "../components/Greeting";
import ProductItem from "../components/ProductItem";

export default () => {
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState([]);

    const renderContent = () => {
        if (loading) {
            return <Loading />;
        } else if (content.length > 0) {
            return (
                <Container fluid tag={FadeIn}>
                    {/* <Row>
                        {content.map((item) => (
                            <Col md={4} className="d-flex" key={item.url}>
                                <ProductItem {...item} />
                            </Col>
                        ))}
                        <
                    </Row> */}
                    <Card className="flex-fill ">
                        <CardImg src="../..//product-placeholder.jpg" className="product-img p-2 pb-0" />
                        <CardBody className="d-flex flex-column justify-content-between">
                            <div className="product-title">{content.title}</div>
                        </CardBody>
                    </Card>
                </Container>
            );
        } else {
            return <Greeting />;
        }
    };

    return (
        <Container fluid>
            <Row className="mx-3">
                <Col>
                    <Container fluid className="overflow-auto" style={{ maxHeight: "90vh" }}>
                        {renderContent()}
                    </Container>
                </Col>
                <Col className="border-md border-left" md={4}>
                    <Chat setContent={setContent} setLoading={setLoading} />
                </Col>
            </Row>
        </Container>
    );
};
