import React from "react";

function NewBoxForm() {
  const INITAL_STATE = {
    "form-height": "50px",
    "form-width": "50px",
    "form-color": "black",
  }
  const handleChange = (e)=> { 
    console.log(INITAL_STATE)
  }
  const handleSubmit = (e)=> { 
    e.preventDefault();
    console.log(INITAL_STATE)
  }
  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="form-height" />
      <input 
        id="form-height"
        type = "text"
        placeholder="height"
        value="50px"
        onChange= { handleChange }
      />

      <label htmlFor="form-weight" />
      <input 
        id="form-weight"
        type = "text"
        placeholder="weight"
        value="50px"
        onChange= { handleChange }
      />

      <label htmlFor="form-color" />
      <input 
        id="form-height"
        type = "text"
        placeholder="color"
        value="color"
        onChange= { handleChange }
      />
      <button>Create new box</button>
    </form>
  )
}

export default NewBoxForm;