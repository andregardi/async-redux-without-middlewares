import React from "react";
import { Card, Avatar } from "@material-ui/core";

const User = props => {
  const { repos } = props;
  const { avatar_url, login, html_url } = repos[0].owner;
  const reposCount = `${repos.length} repositories`;
  return (
    <div className="user-wrapper">
      <Card className="user-card">
        <Avatar className="avatar" alt="a" src={avatar_url} />
        <div>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            <h2>{login}</h2>
          </a>
          <p>{reposCount}</p>
        </div>
      </Card>
    </div>
  );
};

export default User;
