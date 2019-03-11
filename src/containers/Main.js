import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";

import {
  getReposByUsername,
  REPO_FAILURE,
  REPO_REQUEST,
  REPO_SUCCESS
} from "../actions/repos";
import { CardContent } from "@material-ui/core";

function Main(props) {
  const formSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    props.actions.getReposByUsername(username);
  };

  const mapRepos = repo => {
    return (
      // <a key={repo.id} href={repo.html_url}>
      <Card
        key={repo.id}
        style={{
          minWidth: "300px",
          marginRight: "10px",
          marginBottom: "10px",
          flex: "1"
        }}
      >
        <CardContent>
          <a href={repo.html_url}>
            <h3>{repo.name}</h3>
          </a>
          <p>{repo.description}</p>
          <p>Language: {repo.language}</p>
        </CardContent>
      </Card>
      // </a>
    );
  };

  const { repos, status } = props.reposState;

  return (
    <>
      <AppBar position="static">Redux Async without middlewares example</AppBar>
      <form
        onSubmit={formSubmit}
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <TextField
          name="username"
          label="Search repos by username"
          type="search"
          variant="outlined"
          autoComplete="off"
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>

      {status === null && <h1>Select an user</h1>}
      {status === REPO_REQUEST && <h1>Loading</h1>}
      {status === REPO_SUCCESS && (
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            maxWidth: "970px",
            margin: "auto",
            flexWrap: "wrap",
            justifContent: "center"
          }}
        >
          {repos.map(mapRepos)}
        </div>
      )}
      {status === REPO_FAILURE && <h1>Error</h1>}
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
