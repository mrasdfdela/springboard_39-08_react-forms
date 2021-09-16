import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  const [boxes, setBoxes] = useState([
    { width: '20px', height:'20px' , color:'green' }
  ]);
  return (
    <div>
      <p>React Forms Exercise</p>
      { 
        boxes.map( (box) => (
          <Box 
            boxWidth={box.width} 
            boxHeight={box.height} 
            boxColor={box.color}
          />
        ))
      }
      <NewBoxForm />
    </div>
  );
}

export default BoxList;