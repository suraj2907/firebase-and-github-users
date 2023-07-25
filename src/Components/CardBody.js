import React from "react";

import { Card, CardBody, CardTitle, CardFooter, CardImg } from "reactstrap";

const UserCardBody = ({ user }) => {
  return (
    <div>
      <Card style={{ border: "2px solid black", background:"pink", marginTop:"10px" }} body>
        <CardImg src={user.avatar_url} height="500px" style={{borderRadius: "full"}} />

        <CardBody>
          <CardTitle>
            {" "}
            <span style={{ fontWeight: "bold" }}>Full-Name -:</span> {user.name}
          </CardTitle>
          <div>
            {" "}
            <span style={{ fontWeight: "bold" }}>Loaction -:</span>{" "}
            {user.location}
          </div>
          <div>
            {" "}
            <span style={{ fontWeight: "bold" }}>Bio -:</span> {user.bio}
          </div>
          <div>
            <span style={{ fontWeight: "bold" }}>Available For Hire:</span>{" "}
            {user.hireable ? "YES" : "No"}
          </div>
          <div>
            <span style={{ fontWeight: "bold" }}>Followers:</span>{" "}
            {user.followers}
          </div>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default UserCardBody;
