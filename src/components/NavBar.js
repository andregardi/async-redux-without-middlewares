import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import "../index.css";
import { AppBar, TextField, IconButton } from "@material-ui/core";

const NavBar = props => {
  const formSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    props.getReposByUsername(username);
  };

  return (
    <AppBar
      position="static"
      className="nav-bar"
    >
      <form className="search-form" onSubmit={formSubmit}>
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
  );
};

export default NavBar;
