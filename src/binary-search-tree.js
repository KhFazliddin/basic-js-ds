const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    let node = new Node(data);
    !this.treeRoot ? (this.treeRoot = node) : insertNode(node, this.treeRoot);

    function insertNode(node, parent) {
      if (node.data < parent.data) {
        parent.left === null
          ? (parent.left = node)
          : insertNode(node, parent.left);
      } else {
        parent.right === null
          ? (parent.right = node)
          : insertNode(node, parent.right);
      }
    }
  }

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

  remove(data) {
    this.treeRoot = removeNode(this.treeRoot, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        } else {
          let minRightNode = findMinNode(node.right);
          node.data = minRightNode.data;
          node.right = removeNode(node.right, minRightNode.data);
          return node;
        }
      }
    }

    function findMinNode(node) {
      return node.left === null ? node : findMinNode(node.left);
    }
  }

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
