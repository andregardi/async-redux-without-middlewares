import React from "react";
import { Card, CardContent } from "@material-ui/core";

const mapRepos = repo => {
  return (
    <Card key={repo.id} className="repo-card">
      <CardContent>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <h3>{repo.name}</h3>
        </a>
        <p>{repo.description}</p>
        {repo.language && (
          <p>
            <strong>Language:</strong> {repo.language}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

const Repos = ({ repos }) => {
  const mappedRepos = repos.map(mapRepos);
  return <div className="repos-wrapper">{mappedRepos}</div>;
};

export default Repos;
