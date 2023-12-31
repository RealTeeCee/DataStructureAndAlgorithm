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
    return this.head;
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

  removeAtRecursion(node, index) {
    if (index === 0) return node;
    else {
      if (index === 1) return node.next;
      
      node.next = this.removeAtRecursion(node.next, index - 1);
      if(!node.next) this.tail = node;

      return node;
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

  reverseRecursive(cur) {
    if (!cur.next) {
      return cur;
    } else {
      let node = this.reverseRecursive(cur.next);
      cur.next.next = cur;
      cur.next = null;
      this.tail = cur;
      this.head = node;
      return node;
    }
  }
}

const linkedList = new LinkedList();
// linkedList.prepend(1);
// linkedList.prepend(2);
// linkedList.prepend(4);
// linkedList.prepend(5);
// linkedList.prepend(6);
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
// linkedList.removeFirst();
console.log(linkedList.removeAtRecursion(linkedList.head, 4));
// linkedList.insertAt(4, 0);
// linkedList.reverse();
// linkedList.reverseRecursive(linkedList.head);
let test = 0;
