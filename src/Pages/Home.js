import React, { useState, useContext } from "react";

import { Container, Col, Row, Input, InputGroup, Button } from "reactstrap";

import UserCardBody from "../Components/CardBody";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../Context/UserContext";
import Footer from "../Layouts/Footer";
import Repos from "../Components/Repos";

const Home = () => {
  const context = useContext(UserContext);
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState("");

  const fetchDetails = async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log(data);
    } catch (error) {
      toast("Not able to find user", { type: "error" });
    }
  };

  if (!context.user?.uid) {
    return <Navigate to="/signin" />;
  }

  return (
    <div>
      <Container fluid className="mt-3">
        <Row>
          <Col md="5">
            <InputGroup>
              <Input
                placeholder="Enter username"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button onClick={fetchDetails}>Find User</Button>
            </InputGroup>
            {user ? <UserCardBody user={user} /> : null}
            <Footer />
          </Col>
          <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
