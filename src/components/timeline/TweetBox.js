import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";

export const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar />
          <input placeholder="What's happening?" type="text"></input>
        </div>
        <input
          className="tweetBox_imageInput"
          placeholder="Image URL"
          type="text"
        ></input>
        <Button className="tweetBox_tweetButton" type="submit">
          Tweet
        </Button>
      </form>
    </div>
  );
};
