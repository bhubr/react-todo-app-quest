import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import TodoList from '../components/TodoList';

const items = [
  {
    "title": "Task #1",
    "comment": "Easy peasy"
  },
  {
    "title": "Task #2",
    "comment": "Piece of cake"
  }
];

it('TodoList renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList tasks={items} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('TodoList uses the required tags and props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList tasks={items} />, div);
  assert.equal(div.children[0].tagName, 'DIV', "TodoList's enclosing tag should be a div");
  assert.equal(div.children[0].className, 'TodoList', "TodoList's class should be TodoList");
  const itemDivs = div.getElementsByClassName('TodoItem');
  assert.equal(itemDivs.length, items.length, "There should be as many TodoItem's as there are in tasks array");
  ReactDOM.unmountComponentAtNode(div);
});

