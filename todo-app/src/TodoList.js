import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

import './TodoList.css';

function TodoList() {
  const [ todos, setTodos ] = useState([
    {'task':'take out trash', id: uuid()}
  ]);

  const addTodo = (newTodo) =>{
    setTodos( todos => [ ...todos, {...newTodo, id:uuid() }] );
  }

  const deleteTodo = (id)=> {
    setTodos( todos => todos.filter( todo => todo.id !== id) );
  }
  
  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      <ul className="TodoList"> 
        {todos.map((todo) => (
          <Todo 
            key={todo.id}
            deleteTodo={ ()=> deleteTodo(todo.id) }
            task={todo.task} 
            id={todo.id} 
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;