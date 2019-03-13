import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import { CardContent, Avatar } from "@material-ui/core";

import {
  getReposByUsername,
  REPO_FAILURE,
  REPO_REQUEST,
  REPO_SUCCESS
} from "../actions/repos";

import "./Main.css";

const User = props => {
  const { repos } = props;
  const { avatar_url, login, url } = repos[0].owner;
  const reposCount = `${repos.length} repositories`;
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <Card
        style={{
          width: "100%",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Avatar
          alt="a"
          src={avatar_url}
          style={{
            height: "80px",
            width: "80px",
            margin: "10px"
          }}
        />
        <div style={{ flex: 1 }}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <h2 style={{ margin: 0 }}>{login}</h2>
          </a>
          <p style={{ margin: 0 }}>{reposCount}</p>
        </div>
      </Card>
    </div>
  );
};

function Main(props) {
  const formSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    props.actions.getReposByUsername(username);
  };

  const mapRepos = repo => {
    return (
      <Card
        key={repo.id}
        style={{
          minWidth: "300px",
          width: "calc(1/3*100% - (1 - 1/3)*10px)",
          marginLeft: "5px",
          marginBottom: "10px",
          flex: "1"
        }}
      >
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

  const { repos, status } = props.reposState;

  return (
    <>
      <AppBar
        position="static"
        style={{
          marginBottom: "20px"
          // background: "#fff"
        }}
      >
        <form className="SearchForm" searchForm="" onSubmit={formSubmit}>
          <div style={{ margin: "0", flex: "1", textAlign: "left" }}>
            <h3>
              Asynchronous Redux
              <br />
              Without Middlewares
            </h3>
          </div>
          <div style={{ display: "flex", flex: "1", textAlign: "rigth" }}>
            <TextField
              name="username"
              label="Search repos by username"
              // placeholder="Search repos by username..."
              variant="outlined"
              autoComplete="off"
            />
            <Button type="submit" variant="contained" color="primary">
              Search
            </Button>
          </div>
        </form>
      </AppBar>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          maxWidth: "970px",
          margin: "auto",
          flexWrap: "wrap",
          justifContent: "space-between"
        }}
      >
        {status === null && <h1>Select an user</h1>}
        {status === REPO_REQUEST && <h1>Loading</h1>}
        {status === REPO_SUCCESS && (
          <>
            {<User repos={repos} />}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginLeft: "-5px"
              }}
            >
              {repos.map(mapRepos)}
            </div>
          </>
        )}
        {status === REPO_FAILURE && <h1>Error</h1>}
      </div>
    </>
  );
}

Main.propTypes = {
  reposState: PropTypes.object,
  status: PropTypes.string
};

const mapStateToProps = state => ({
  reposState: state.repos
});

const mapDispatchToProps = dispatch => ({
  actions: {
    getReposByUsername: getReposByUsername.bind(null, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
