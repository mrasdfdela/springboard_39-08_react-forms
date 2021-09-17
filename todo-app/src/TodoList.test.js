import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TodoList from './TodoList';

it('renders without crashing', () => {
  render(<TodoList />);
});

it('matches snapshot', () => {
  const {asFragment} = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it('adds and deletes todos correctly', ()=>{
  const { queryByText, queryByLabelText } = render(<TodoList />);
  // adds and checks new to-do
  const formTodo = queryByLabelText("Add To Do's!");
  const addBtn = queryByText('Submit');
  fireEvent.change(formTodo, {target: {value: "take out the trash"}} );
  fireEvent.click(addBtn)
  
  expect(queryByText("take out the trash")).toBeInTheDocument();
  
  // deletes and checks new to-do has been removed
  const deleteBtn = queryByText('X');
  
  fireEvent.click(deleteBtn);
  expect(queryByText("X")).not.toBeInTheDocument();
  expect(queryByText("take out the trash")).not.toBeInTheDocument();
});