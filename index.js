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
  pop() {
    if (!this.head) {
      return undefined;
    }
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    var pre = this.head;
    var temp = this.head.next;

    while (temp.next != null) {
      pre = temp;
      temp = temp.next;
    }
    pre.next = null;
    this.tail = pre;
    this.length--;

    return this;
  }
  shift() {
    var temp = this.head;
    this.head = this.head.next;
    return this;
  }
}

list = new SinglyLinkedList();
list.push("hi");
list.push("hello");
list.push("goodbye");
list.push("bye");
console.log(list);
list.pop();
console.log(list);
list.shift();
console.log(list);
