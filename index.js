class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newVal = new Node(val);

    if (!this.head) {
      this.head = newVal;
      this.tail = this.head;
    } else {
      this.tail.next = newVal;
      this.tail = newVal;
    }

    this.length++;
    return this;
  }
  pop() {}
}

list = new SinglyLinkedList();
list.push("hello");
list.push("hi");
console.log(list);
