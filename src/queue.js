const { NotImplementedError } = require("../extensions/index.js");
const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

 class Queue {
  constructor() {
    this.cur = null;
    this.head = this.cur;
  }


  getUnderlyingList() {
    this.cur = this.head;
    return this.cur;
  }

  enqueue(value) {
    let current = this.cur;
    if (this.cur === null) {
      this.cur = {
        value: value,
        next: null
      }
      this.head = this.cur;
      return this.cur;
    }
    this.cur = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new ListNode(value);
    return this.head;
  }

  dequeue() {
    this.cur = this.head;
    this.head = this.head.next;
    return this.cur.value;
  }
}

/* node ./src/queue.js */
const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue());
console.log(q.dequeue());


module.exports = {
  Queue,
};
