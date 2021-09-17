import React from "react";
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', () => {
  render(<BoxList />);
});

it('matches snapshot', ()=>{
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it('deletes boxes correctly', ()=>{
  const { queryByText } = render(<BoxList />);
  const deleteBtn = queryByText('X');
  fireEvent.click(deleteBtn);
  expect(queryByText('X')).not.toBeInTheDocument();
});

it('adds in new box correctly', ()=>{
  const { queryByText, getByLabelText } = render(<BoxList />);
  // first delete dummy data 
  const deleteBtn = queryByText("X");
  fireEvent.click(deleteBtn);

  // Create a box and look for delete button
  const addBtn = queryByText('Create new box');
  const formHeight = getByLabelText("Height");
  const formWidth = getByLabelText("Width");
  const formColor = getByLabelText("Color");

  fireEvent.change(formHeight, { target: {value: "200px"} });
  fireEvent.change(formWidth, { target: {value: "150px"} });
  fireEvent.change(formColor, { target: {value: "yellow"} });
  fireEvent.click(addBtn);

  expect(queryByText('X')).toBeInTheDocument();
});