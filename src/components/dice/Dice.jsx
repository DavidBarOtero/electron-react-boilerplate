import React, { useState } from "react";

const Dice = ({ sides }) => {
  const [result, setResult] = useState(null);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * sides) + 1;
    setResult(randomNumber);
  };

  return (
    <div>
      <button onClick={rollDice}>Roll Dice</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default Dice;
