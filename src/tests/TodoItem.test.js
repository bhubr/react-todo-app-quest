import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import TodoItem from '../components/TodoItem';

it('TodoItem renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoItem title="My title" comment="My comment" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('TodoItem uses the required tags and props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoItem title="My title" comment="My comment" />, div);
  assert.equal(div.children[0].tagName, 'DIV', "TodoItem's enclosing tag should be a div");
  const innerDivs = div.getElementsByTagName('div');
  assert.equal(innerDivs.length, 1, "There should be only one div inside TodoItem");
  assert.equal(div.children[0].className, 'TodoItem', "TodoItem's enclosing div should have TodoItem as className");
  const h3 = div.children[0].children[0];
  const p = div.children[0].children[1];
  assert.equal(h3.tagName, 'H3', "TodoItem div's first child should be a h3");
  assert.equal(h3.innerHTML, 'My title', "The h3 should containt the title prop");
  assert.equal(p.tagName, 'P', "TodoItem div's second child should be a p");
  assert.equal(p.innerHTML, 'My comment', "The p should containt the comment prop");
  ReactDOM.unmountComponentAtNode(div);
});

