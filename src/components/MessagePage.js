import React from "react";
import notFoundImg from "../assets/404.png";
import gitImg from "../assets/git.png";
import errorImg from "../assets/error.png";
import emptyImg from "../assets/empty.png";
import spinnerImg from "../assets/spinner.gif";
import "../index.css";

function MessagePage({ image, title, text }) {
  let imageUrl = "";
  switch (image) {
    case "spinner":
      imageUrl = spinnerImg;
      break;
    case "git":
      imageUrl = gitImg;
      break;
    case "error":
      imageUrl = errorImg;
      break;
    case "empty":
      imageUrl = emptyImg;
      break;
    case "404":
      imageUrl = notFoundImg;
      break;
    default:
      imageUrl = null;
  }
  return (
    <div className="MessageContainer">
      <img src={imageUrl} alt={image} />
      <h2>{title}</h2>
      <h3>{text}</h3>
    </div>
  );
}

export default MessagePage;
