import React from "react";
import { Card, CardBody, CardImg, CardFooter, Button, Row, Col } from "reactstrap";

export default (props) => {
    return (
        <Card className="flex-fill my-3">
            <CardImg src="/product-placeholder.jpg" className="product-img p-2 pb-0" />
            <CardBody className="d-flex flex-column justify-content-between">
                <div className="product-title">{props.title}</div>
                <Row className="mt-4">
                    {/* <Col className="product-rating my-auto"> */}
                    {/*     ★ {props.stars} ({props.ratings.trim()}) */}
                    {/* </Col> */}
                    <Col className="product-price text-right">{props.price}</Col>
                </Row>
            </CardBody>
            <CardFooter>
                <Button color="success" tag="a" href={props.url} className="w-100">
                    Buy at Walmart
                </Button>
            </CardFooter>
        </Card>
    );
};
