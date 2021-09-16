import React, { useState } from "react";

function NewBoxForm({ addBox }) {
  const INITIAL_STATE = {
    "width": "",
    "height": "",
    "color": "",
  };
  const [ formData, setFormData ] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData( fData => ({
      ...fData, 
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="form-height" />
      <input
        id="form-height"
        type="text"
        placeholder="Box Height"
        name="height"
        value={ formData.height }
        onChange={handleChange}
      />

      <label htmlFor="form-width" />
      <input
        id="form-width"
        type="text"
        placeholder="Box Width"
        name="width"
        value={ formData.width }
        onChange={handleChange}
      />

      <label htmlFor="form-color" />
      <input
        id="form-height"
        type="text"
        placeholder="Box Color"
        name="color"
        value={ formData.color }
        onChange={handleChange}
      />
      <button>Create new box</button>
    </form>
  );
}

export default NewBoxForm;