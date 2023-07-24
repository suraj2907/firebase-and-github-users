import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className=" bg-dark p-3 fixed-bottom text-white text-uppercase"
    >
      <Row>
        <Col className="d-flex justify-content-center gap-3  ">
          <Link style={{ textDecoration: "none" }} to="">
            Github
          </Link>
          <Link style={{ textDecoration: "none" }} to="">
            Linkedin
          </Link>
          <Link style={{ textDecoration: "none" }} to="s">
            Surajjawrani2022@gmail.com
          </Link>
          <div> &copy; Suraj Jawrani </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
