import React from "react";
import PropTypes from "prop-types";

import { REPOS_SUCCESS } from "../constants/ActionTypes";

import "../index.css";
import MessagePage from "../components/MessagePage";
import Repos from "../components/Repos";
import NavBar from "../components/NavBar";
import User from "./User";

function Main(props) {
  const { repos, status } = props.reposState;
  const { getReposByUsername } = props;
  return (
    <>
      <NavBar getReposByUsername={getReposByUsername} />
      <div className="container">
        {status === REPOS_SUCCESS ? (
          <>
            <User repos={repos} />
            <Repos repos={repos} />
          </>
        ) : (
          <MessagePage status={status} />
        )}
      </div>
    </>
  );
}

Main.propTypes = {
  reposState: PropTypes.object,
  getReposByUsername: PropTypes.func
};

export default Main;
