const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.btRoot = null;
  }

  root() {
    return this.btRoot;
  }

  add(data) {
    let newNode = new Node(data);

    if (this.btRoot === null) {
      this.btRoot = newNode;
    } else {
      this.addNode(this.btRoot, newNode);
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }

  has(data) {
    return this.search(this.btRoot, data) ? true : false;
  }

  find(data) {
    return this.search(this.btRoot, data);
  }

  min(node = this.btRoot) {
    if (node.left === null) return node.data;
    else return this.min(node.left);
  }

  max(node = this.btRoot) {
    if (node.right === null) return node.data;
    else return this.max(node.right);
  }

  remove(data) {
    this.btRoot = this.removeNode(this.btRoot, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let newNode = node.right;
      while (newNode.left) {
        newNode = newNode.left;
      }

      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }
}

module.exports = {
  BinarySearchTree,
};
