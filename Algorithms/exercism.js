class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length ++;
    return this;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length ++;
    return this;
  }

  shift() {
    if (!this.head) {
      return false;
    }

    const shiftedNode = this.head;
    const newHead = this.head.next;

    if (!newHead) {
      this.tail = newHead;
    }

    this.head = newHead;

    this.length --;

    return shiftedNode;
  }

  getNodeAtIndex(index) {
    if (index >= this.length || index < 0) {
      return null;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }

  pop() {
    if (!this.tail) {
      return false;
    }

    const poppedNode = this.tail;

    if (this.head !== this.tail) {
      const newTail = this.getNodeAtIndex(this.length - 2);
      newTail.next = null;
      this.tail = newTail;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length --;
    
    return poppedNode;
  }
}


let sll = new SingleLinkedList();
console.log(sll);
sll.push("value1");
sll.push("value2");
sll.push("value3");
sll.unshift("value4");
sll.unshift("value5");