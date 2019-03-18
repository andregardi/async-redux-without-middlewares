import React from "react";

import {
  REPOS_REQUEST,
  REPOS_EMPTY,
  REPOS_NOT_FOUND,
  REPOS_ERROR
} from "../constants/ActionTypes";

import notFoundImg from "../assets/404.png";
import gitImg from "../assets/git.png";
import errorImg from "../assets/error.png";
import emptyImg from "../assets/empty.png";
import spinnerImg from "../assets/spinner.gif";
import "../index.css";

const MessagePage = ({ status }) => {
  let imageUrl, altText, title, text;
  switch (status) {
    case REPOS_REQUEST:
      imageUrl = spinnerImg;
      altText = "spinner";
      title = "Loading...";
      text = "";
      break;
    case REPOS_ERROR:
      imageUrl = errorImg;
      altText = "error";
      title = "Something went wrong";
      text = "Please, check your internet connection and try again";
      break;
    case REPOS_EMPTY:
      imageUrl = emptyImg;
      altText = "empty";
      title = "No Repositories";
      text =
        "We found the user that you are looking for, but he or she has no repositories";
      break;
    case REPOS_NOT_FOUND:
      imageUrl = notFoundImg;
      altText = "404";
      title = "User not found";
      text = "Please, try another username";
      break;
    default:
      imageUrl = gitImg;
      altText = "git";
      title = "No user selected";
      text =
        "Please, select a GitHub user on the bar to see his or her repositories";
  }
  return (
    <div className="message-container">
      <img src={imageUrl} alt={altText} />
      <h2>{title}</h2>
      <h3>{text}</h3>
      {/* Preloads the spinner GIF for a better UX */}
      <link rel="preload" href={spinnerImg} as="image"></link>
    </div>
  );
};

export default MessagePage;
