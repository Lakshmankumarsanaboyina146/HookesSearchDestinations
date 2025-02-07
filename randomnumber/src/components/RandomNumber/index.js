// Write your code here
import { React, useState } from "react";

import "./index.css";

const RandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  const getRandomNumber = () => {
    const Number = Math.ceil(Math.random() * 100);

    setRandomNumber(Number);
  };

  return (
    <div className="random-number-bg">
      <div className="random-number-container">
        <h1 className="random-number-heading">Random number</h1>
        <p className="random-number-desc">
          Generate a random number in the range of 0 to 100
        </p>
        <button onClick={getRandomNumber}>Generate</button>
        <p className="random-number-heading">{randomNumber}</p>
      </div>
    </div>
  );
};

export default RandomNumber;
