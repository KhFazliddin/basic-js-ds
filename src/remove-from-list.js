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
 class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
const last = list => {
  let node = list;
  while (node.next) {
      node = node.next;
  }
  return node;
};



function removeKFromList(l, k) {
  let head = l;
  let newList = null;

  while(head) {
     if(head.value !== k) {
      if(!newList) {
          newList = new ListNode(head.value);
      } else {
          last(newList).next = new ListNode(head.value);
      } 
     }
      head = head.next;
  }

  return newList;
 
}
module.exports = {
  removeKFromList,
};
