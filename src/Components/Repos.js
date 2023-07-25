import React, { useState, useEffect } from "react";

import { ListGroup, ListGroupItem } from "reactstrap";

import axios from "axios";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetRepos = async () => {
      const { data } = await axios.get(repos_url);
      setRepos(data);
      console.log(data);
    };

    fetRepos();
  }, [repos_url]);

  return (
    <ListGroup>
      {repos.map((repo) => (
        <ListGroupItem key={repo.id}>
          <div>{repo.name}</div>
          <div>{repo.language}</div>
          <div>{repo.description}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Repos;
