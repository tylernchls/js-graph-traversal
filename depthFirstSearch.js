'use strict';

const Node = require('./graphGenerator');

const DFS = (start, searchFor) => {

  let currentNode = start;

  let stack = [];

  let visited = [];

  stack.push(currentNode);

  while(stack.length !== 0) {
    currentNode = stack.pop();

    if(currentNode.value === searchFor) {
      return currentNode;
    }

    if(visited.indexOf(currentNode) === -1) {
      visited.push(currentNode.name);

      currentNode.neighbors.forEach((neighbor) => {
        stack.push(neighbor);
        console.log('stack: ', stack);
        console.log('visited: ', visited);
      });
    }
  }
  return false;
}









module.exports = DFS;
