class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;

    return this;
  }

  dequeue() {
    if (this.length > 0) {
      const firstNode = this.first;
      const nextNode = this.first.next;
      this.first = nextNode;
      if (this.length === 1) {
        this.first = null;
        this.last = null;
      }

      this.length--;
      return firstNode.value;
    } else {
      console.error('There are not nodes in queue');
      return;
    }
  }
}

const myQueue = new Queue()