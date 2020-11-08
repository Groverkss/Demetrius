import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default () => {
    return (
        <Navbar light className="custom-bg-primary mb-2">
            <NavbarBrand href="/" className="font-weight-bold custom-fg-primary">
                DSSE
            </NavbarBrand>
        </Navbar>
    );
};
