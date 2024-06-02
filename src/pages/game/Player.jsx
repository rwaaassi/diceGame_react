import React from "react";

const Player = ({ playerNum, overallScore, currentScore }) => {
  return (
    <div className="player">
      <h1>{playerNum}</h1>
      <h2>Overall Score <br /> {overallScore}</h2>
      <h3 className="current-container">Current  <br />{currentScore}</h3>
    </div>
  );
};

export default Player;
