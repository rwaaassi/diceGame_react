const Dice = ({ onRoll, diceImages }) => {
  return (
    <div className="dice-container">
      <img src={diceImages.dice1} alt="Dice 1" />
      <img src={diceImages.dice2} alt="Dice 2" />
      <button type="button" onClick={onRoll}>
        Roll Dice
      </button>
    </div>
  );
};

export default Dice;
