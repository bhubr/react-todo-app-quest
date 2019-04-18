import React from 'react';

const TodoItem = ({ title, comment }) => (
  <div className="TodoItem">
    <h3>{title}</h3>
    <p>{comment}</p>
  </div>
);

export default TodoItem;

