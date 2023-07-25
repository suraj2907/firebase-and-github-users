import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className=" bg-dark p-3 fixed-bottom text-white text-uppercase"
    >
      <Row>
        <Col className="d-flex justify-content-center gap-3  ">
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/suraj2907"
          >
            Github
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/suraj-jawrani/"
          >
            Linkedin
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://mail.google.com/mail/u/2/#inbox?compose=CllgCJfsdQQlcJzdLzlKLGRwJQLBqzHqrSBKmCpJqHXtsrnXZPTRtnQxSdBvLkFMvHlbssVcvCg"
          >
            Surajjawrani2022@gmail.com
          </a>
          <div> &copy; Suraj Jawrani </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
