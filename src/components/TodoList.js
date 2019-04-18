import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks }) => (
  <div className="TodoList">
    {
      tasks.map((item, index) => (
        <TodoItem key={index} {...item} />
      )) 
    }
  </div>
);

export default TodoList;

