import React from "react";

function Box({boxWidth, boxHeight, boxColor}) {
  return (
    <div
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