import { useState } from "react";
import Background from "./Background";
import Instructions from "./pages/landing/Instructions";
import Game from "./pages/game/Game";

const App = () => {
  const [currentPage, setCurrentPage] = useState("instructions");

  const handleStartGameClick = () => {
    setCurrentPage("game");
  };

  const handleNewGameClick = () => {
    setCurrentPage("instructions");
  };

  return (
    <>
      <div className="game-btns">
        <button onClick={handleStartGameClick}>Start Game</button>
        <button onClick={handleNewGameClick}>New Game</button>
      </div>
      <Background>
        {currentPage === "instructions" && <Instructions />}
        {currentPage === "game" && <Game />}
      </Background>
    </>
  );
};
export default App;
