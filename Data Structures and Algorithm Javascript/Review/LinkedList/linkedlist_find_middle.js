class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  prepend = (value) => {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  };

  append = (value) => {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  };

  removeFirst() {
    if (this.length === 0) return;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
  }

  removeLast() {
    if (this.length === 0) return;
    else if (this.length === 1) {
      this.removeFirst();
    } else {
      let currentNode = this.head;
      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
    }
  }

  removeAt(index) {
    if (this.length === 0) return;
    else if (this.length === 1 || index === 0) {
      this.removeFirst();
    } else {
      let currentNode = this.head;
      let i = 0;
      while (i < index - 1) {
        currentNode = currentNode.next;
        i++;
      }
      currentNode.next = currentNode.next.next;
      if (!currentNode.next) this.tail = currentNode;
    }
  }

  insertAt(index, value) {
    if (index === 0) this.prepend(value);
    else if (this.length === 0 || index === this.length - 1) this.append(value);
    else {
      let currentNode = this.head;
      let i = 0;
      while (i < index) {
        currentNode = currentNode.next;
        i++;
      }
      const newNode = new Node(value);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length++;
    }
  }

  findMiddle() {
    let currentNode = this.head;
    const middle = Math.floor((this.length - 1) / 2);
    let i = 0;
    while(i < middle){
        currentNode = currentNode.next;
        i++;
    }
    return currentNode;
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
// linkedList.append(5);

console.log(linkedList.findMiddle());
let test = 0;
