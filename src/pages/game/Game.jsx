import React, { useState } from "react";
import Player from "./Player";
import Dice from "../game/Dice";
import dice from "../../data";
const Game = () => {
  const [diceImages, setDiceImages] = useState({
    dice1: dice[0],
    dice2: dice[1],
  });
  const [currentScore, setCurrentScore] = useState(0);
  const [overallScores, setOverallScores] = useState({
    player1: 0,
    player2: 0,
  });
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const getRandomIndex = () => {
    return Math.floor(Math.random() * dice.length);
  };

  const rollDice = () => {
    const randomIndex1 = getRandomIndex();
    const randomIndex2 = getRandomIndex();

    const dice1Value = randomIndex1 + 1;
    const dice2Value = randomIndex2 + 1;

    let newScore = dice1Value + dice2Value;
    if (dice1Value === 6 && dice2Value === 6) {
      newScore += 10;
    }

    setCurrentScore((prevScore) => prevScore + newScore);
    setDiceImages({ dice1: dice[randomIndex1], dice2: dice[randomIndex2] });
  };

  const holdScore = () => {
    setOverallScores((prevScores) => {
      const newScores = { ...prevScores };
      newScores[`player${currentPlayer}`] += currentScore;
      return newScores;
    });

    setCurrentScore(0);
    setCurrentPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
  };

  return (
    <>
      <Player
        playerNum="Player 1"
        overallScore={overallScores.player1}
        currentScore={currentPlayer === 1 ? currentScore : 0}
      />
      <div>
        <Dice onRoll={rollDice} diceImages={diceImages} />
        <button type="button" onClick={holdScore} className="hold-btn">
          Hold
        </button>
      </div>
      <Player
        playerNum="Player 2"
        overallScore={overallScores.player2}
        currentScore={currentPlayer === 2 ? currentScore : 0}
      />
    </>
  );
};

export default Game;
