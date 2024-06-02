import App from "../../App"

const Instructions = () => {
  return (
    <section className="landing-page">
      <h1>Game Instructions</h1>
      <ul className="instructions">
        <li>
          In your turn - roll the dice and accumulate the result in "current".
        </li>
        <li>Each player gets to roll the dice as many times as they want.</li>
        <li>Whoever reaches exactly 100 in the overall score wins.</li>
      </ul>
    </section>
  );
};
export default Instructions;
