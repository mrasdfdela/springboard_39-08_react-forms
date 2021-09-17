import React from "react";
import './Todo.css';

function Todo({ task, deleteTodo }) {
  return (
    <>
      <li>
        <button onClick={deleteTodo}>X</button>
        <span>{task}</span>
      </li>
    </>
  );
}

export default Todo;