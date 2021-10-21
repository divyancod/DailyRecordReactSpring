import React from "react";
import { Container } from "reactstrap";

function Footer() {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-info text-white fixed-bottom"
    >
      <div>
        &copy; Divyanshu Verma
      </div>
      <div className="mb-1">
        <b>Login App build on ReactJS and Spring Boot</b>
      </div>
    </Container>
  );
}

export default Footer;
