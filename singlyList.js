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
  unshift(val) {
    var newValue = new Node(val);
    var temp = this.head;
    this.head = newValue;
    this.head.next = temp;
    this.length++;
  }
  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    var counter = 0;
    var temp = this.head;

    while (counter !== index) {
      temp = this.head.next;
      counter++;
    }
    if (temp === null) {
      return "NOT_FOUND";
    }
    return temp;
  }

  set(index, val) {
    var foundValue = this.get(index);

    if (foundValue) {
      foundValue.val = val;
      return true;
    } else {
      return false;
    }
  }
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return null;
    }
    var newNode = new Node(val);
    var pre = this.head;

    for (let i = 0; i < index - 1; i++) {
      pre = pre.next;
    }
    var aft = pre.next;
    newNode.next = aft;
    pre.next = newNode;

    return this;
  }
  remove(index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    var pre = this.head;
    for (let i = 0; i < index - 1; i++) {
      pre = pre.next;
    }
    var removedVal = pre.next;
    var updated = removedVal.next;

    pre.next = updated;
    this.length--;
  }
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

list = new SinglyLinkedList();
list.push("hi");
list.push("hello");
list.push("goodbye");
list.push("bye");
console.log(list);
list.reverse();
console.log(list);
