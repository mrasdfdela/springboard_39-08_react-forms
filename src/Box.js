import React from "react";
import "./Box.css";

function Box({boxWidth, boxHeight, boxColor}) {
  return (
    <div
      className="Box"
      style={
        {
          width: boxWidth,
          height: boxHeight,
          backgroundColor: boxColor
        }
      }
    >

    </div>
  )
}

export default Box;