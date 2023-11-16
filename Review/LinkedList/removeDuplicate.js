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

  reverse() {
    let first = null;
    let second = this.head;
    this.tail = this.head;

    while (second) {
      let third = second.next;
      second.next = first;
      first = second;
      second = third;
    }
    this.head = first;
  }

  removeDuplicate() {
    let currentNode = this.head;
    let nextNode = currentNode.next;
    while (nextNode) {
      nextNode = currentNode.next;
      if (nextNode && currentNode.value === nextNode.value) {
        nextNode = nextNode.next;
        currentNode.next = nextNode;
      } else {
        currentNode = currentNode.next;
      }
    }
  }
  removeDuplicateV2() {
    let currentNode = this.head;

    while (currentNode) {
      let temp = currentNode;
      while (temp && temp.value === currentNode.value) {
        temp = temp.next;
      }
      currentNode.next = temp;
      currentNode = currentNode.next;
    }
  }

  removeDuplicateV3() {
    const set = new Set();
    let currentNode = this.head;
    set.add(currentNode.value);
    while (currentNode.next) {
      if (currentNode.next && set.has(currentNode.next.value)) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
        if (!set.has(currentNode.value)) set.add(currentNode.value);
      }
    }
  }
}

const linkedList = new LinkedList();
linkedList.append(4);
linkedList.append(4);
linkedList.append(2);
linkedList.append(2);
linkedList.append(3);
linkedList.append(3);
linkedList.append(3);

console.log(linkedList.removeDuplicateV3());
let test = 0;
