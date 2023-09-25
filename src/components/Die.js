import React from "react";

import "./Die.css";

const Die = (props) => {
  return (
    <div
      onClick={props.holdDice}
      className={props.isHeld ? "die-face held" : "die-face"}
    >
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
};

export default Die;
