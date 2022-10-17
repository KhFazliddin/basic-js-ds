const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // add data
  insert(data) {
    let newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);

    insertNode(node, newNode);
    {
      if (newNode.data < node.data) {
        if (node.left === null) node.left = newNode;
        else this.insertNode(node.left, newNode);
      } else {
        if (node.right === null) node.right = newNode;
        else this.insertNode(node.right, newNode);
      }
    }
  }
  // has data

  has(data) {
    return hasNode(this.treeRoot, data);

    function hasNode(node, data) {
      if (!node) {
        return false;
      }
      if (data === node.data) {
        return true;
      }
      return data < node.data
        ? hasNode(node.left, data)
        : hasNode(node.right, data);
    }
  }
  // find data

  find(data) {
    return findNode(this.treeRoot, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      }
      if (data === node.data) {
        return node;
      }
      return data < node.data
        ? findNode(node.left, data)
        : findNode(node.right, data);
    }
  }
  // remove data
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, key) {
    if (node === null) return null;
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
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

      let aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }
  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }
  // get minumum value
  min() {
    if (!this.treeRoot) {
      return null;
    }
    let node = this.treeRoot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }
  // get maximum value
  max() {
    if (!this.treeRoot) {
      return null;
    }
    let node = this.treeRoot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
