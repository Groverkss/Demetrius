import React from "react";
import { Container } from "reactstrap";
import { Spinner } from "reactstrap";
import FadeIn from "react-fade-in";

export default () => {
    return (
        <Container
            fluid
            tag={FadeIn}
            className="d-flex flex-column justify-content-center align-items-center greeting-container"
        >
            <Spinner style={{ width: "5rem", height: "5rem" }} />
        </Container>
    );
};
