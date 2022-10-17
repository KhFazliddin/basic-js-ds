const { NotImplementedError } = require("../extensions/index.js");
const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function addNode(node, listNode) {
  if (node.next === null) {
    node.next = {
      value: listNode.value,
      next: listNode.next
    };
  } else {
    addNode(node.next, listNode);
  }
};

function removeKFromList(l, k) {
  let arr = [];
  let list = l;

  while (list.next) {
    arr.push(list.value);
    list.value = list.next.value;
    list.next = list.next.next;
  }
  if (!list.next) {
    arr.push(list.value)
  }

  arr = arr.filter(el => el !== k);

  let listNode = new ListNode(arr[0]);

  list = {
    value: listNode.value,
    next: listNode.next
  };

  for (let i = 1; i < arr.length; i++) {
    let listNode = new ListNode(arr[i]);
    addNode(list, listNode);
  }
  return list;
}

module.exports = {
  removeKFromList,
};
