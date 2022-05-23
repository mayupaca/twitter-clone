import React from "react";
import "./Timeline.css";
import { TweetBox } from "./TweetBox";

export const Timeline = () => {
  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline_header">
        <h2>Home</h2>
      </div>
      {/* TweetBox */}
        <TweetBox />

      {/* Post */}
    </div>
  );
};
