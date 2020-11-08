import React from "react";
import { Card, CardBody, Row } from "reactstrap";
import FadeIn from "react-fade-in";

export default ({ content }) => {
    return (
        <Row tag={FadeIn} className="d-flex justify-content-end my-2">
            <Card className="bg-primary out-message">
                <CardBody className="py-2 px-3 text-light">{content}</CardBody>
            </Card>
        </Row>
    );
};
