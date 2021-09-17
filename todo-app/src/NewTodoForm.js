import React, { useState } from 'react';
// import './NewTodoForm.css';

function NewTodoForm({ addTodo }){
  const INITIAL_STATE = { "task":"" };
  const [ formData, setFormData ] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData( fData => ( {...fData, [name]:value} ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(formData);
    setFormData(INITIAL_STATE);
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Add To Do's!</label><br/>
      <input
        id="task"
        type="text"
        placeholder="Add todo here"
        name="task"
        value={formData.task}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default NewTodoForm;