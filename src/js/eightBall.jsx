import React, { useState } from "react";

const sayings = ["Nope", "Maybe", "Sort of?", "Meh", "lol", "🤷‍♂️", "Kinda"];
const getRandomSaying = () => {
  const index = Math.floor(Math.random() * sayings.length);
  return sayings[index];
};

const EightBall = () => {
  let [visible, setVisible] = useState(false);
  let [saying, setSaying] = useState("");
  const onClick = () => {
    if (!visible) {
      setSaying(getRandomSaying());
    }
    setVisible(!visible);
  };

  return (
    <div className="eight-ball" onClick={onClick}>
      <div className="window">
        <div className="liquid"></div>
        <div className="answer" style={{ opacity: visible ? 1 : 0 }}>
          {saying}
        </div>
      </div>
    </div>
  );
};

export default EightBall;
