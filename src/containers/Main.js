import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import { CardContent, Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import {
  getReposByUsernameInjector,
  REPOS_ERROR,
  REPOS_REQUEST,
  REPOS_SUCCESS,
  REPOS_NOT_FOUND
} from "../actions/repos";

import "../index.css";
import MessagePage from "../components/MessagePage";

const User = props => {
  const { repos } = props;
  const { avatar_url, login, html_url } = repos[0].owner;
  const reposCount = `${repos.length} repositories`;
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <Card className="UserCard">
        <Avatar className="Avatar" alt="a" src={avatar_url} />
        <div style={{ flex: 1 }}>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
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
        }}
      >
        <form className="SearchForm" searchForm="" onSubmit={formSubmit}>
          <div style={{ margin: "0", flex: "2", textAlign: "left" }}>
            <h3>Asynchronous Redux Without Middlewares</h3>
          </div>
          <div style={{ display: "flex", flex: "1", textAlign: "rigth" }}>
            <TextField
              name="username"
              placeholder="Search repos by username..."
              variant="outlined"
              autoComplete="off"
            />
            <IconButton type="submit" aria-label="Search">
              <SearchIcon />
            </IconButton>
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
        {status === null && (
          <MessagePage
            image="git"
            title="No user selected"
            text="Please, select a GitHub user on the bar to see his or her repositories"
          />
        )}
        {status === REPOS_REQUEST && (
          <MessagePage image="spinner" title="Loading..." text="" />
        )}
        {status === REPOS_ERROR && (
          <MessagePage
            image="error"
            title="Something went wrong"
            text="Please, check your internet connection and try again"
          />
        )}
        {status === REPOS_NOT_FOUND && (
          <MessagePage
            image="404"
            title="User not found"
            text="Please, try another username"
          />
        )}
        {status === REPOS_SUCCESS &&
          (repos.length === 0 ? (
            <MessagePage
              image="empty"
              title="No Repositories"
              text="We found the user that you are looking for, but he or she has no repositories"
            />
          ) : (
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
          ))}
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
    getReposByUsername: getReposByUsernameInjector(dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
