import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  const [boxes, setBoxes] = useState([
    { width: '20px', height:'20px' , color:'green', id: uuid() }
  ]);

  const addBox = (newBox)=> {
    setBoxes( boxes=> [...boxes, {...newBox, id:uuid()} ] );
  }

  const deleteBox = (id)=>{
    setBoxes( boxes => {
      return boxes.filter ( box => box.id !== id)
    })
  }

  return (
    <div>
      <p>React Forms Exercise</p>
      { 
        boxes.map( (box) => (
          <Box 
            boxWidth={box.width} 
            boxHeight={box.height} 
            boxColor={box.color}
            deleteBox={ ()=>deleteBox(box.id) }
          />
        ))
      }
      <NewBoxForm addBox={addBox} />
    </div>
  );
}

export default BoxList;