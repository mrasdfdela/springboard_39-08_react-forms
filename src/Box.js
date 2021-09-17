import React from "react";
// import { v4 as uuid } from "uuid";

import "./Box.css";

function Box({id, boxWidth, boxHeight, boxColor, deleteBox}) {
  return (
    <div className="Box" key={id}>
      <div
        style={{
          width: boxWidth,
          height: boxHeight,
          backgroundColor: boxColor,
        }}
      ></div>
      <button onClick={deleteBox}>X</button>
    </div>
  );
}

export default Box;