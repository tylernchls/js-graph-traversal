const Node = class {

  constructor(name, value, neighbors) {
    this.name = name;
    this.value = value;
    this.neighbors = [];
  }

  addNeighbors(arr) {
    if(arr === undefined) {
      return this.neighbors;
    } else {
      let newArr = this.neighbors.concat(arr);
      this.neighbors = newArr;
      return this.neighbors;

    }
  }

  getNeighbors() {
    return this.neighbors;
  }
};


module.exports = Node;

