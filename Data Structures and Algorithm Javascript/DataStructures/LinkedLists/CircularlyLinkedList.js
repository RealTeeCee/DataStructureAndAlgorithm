// It's a list that is linked
// Contain a set of Node. Each node have two element: value of value you want to store and pointer to the next node in line
// First node is head and the last is tail.
// Why linked List:

// Iterate lower than array, However, these inserts that we can do in the middle of a link list is a lot better than an array.

class Node {
  constructor(value, next) {
    // this.setValue(value);
    // this.setNext(next);
    this.value = value;
    this.next = next;
  }
  // getNext() {
  //   return this.next;
  // }
  // setNext(next) {
  //   this.next = next;
  // }
  // getValue() {
  //   return this.value;
  // }
  // setValue(value) {
  //   this.value = value;
  // }
}

class CircularlyLinkedList {
  constructor() {
    this.tail = new Node(null, null);
    this.length = 0;
  }

  append(value) {
    this.prepend(value);
    this.tail = this.tail.next;
  }
  prepend(value) {
    if (this.length === 0) {
      this.tail = new Node(value, null);
      this.tail.next = this.tail;
    } else {
      let newNode = new Node(value, this.tail.next);
      this.tail.next = newNode;
    }

    this.length++;
  }

  rotate() {
    if (this.tail) {
      this.tail = this.tail.next;
    }
  }

  removeFirst() {
    if (this.length === 0) return null;
    let head = this.tail.next;
    if (head === this.tail) {
      this.tail = null;
    } else {
      this.tail.next = head.next;
    }
    this.length--;
    return head;
  }

  removeLast() {
    for (let i = this.length; i > 1; i--) {
      this.rotate();
    }
    this.removeFirst();
  }
  // 1 2 3 4
  // 1 2 4
  removeAt(index) {
    if (this.length === 0) return;
    if (this.length === 1) return this.removeFirst();

    let tail = this.tail;
    for (let i = index; i > 0; i--) {
      tail = tail.next;
    }
    tail.next = tail.next.next;
    tail = this.tail;

    this.length--;
  }
}

const myLinkedList = new CircularlyLinkedList();

// myLinkedList.prepend(6);
// myLinkedList.prepend(5);
// myLinkedList.prepend(4);
// myLinkedList.prepend(3);
// myLinkedList.prepend(2);
// myLinkedList.prepend(1);
// myLinkedList.prepend(0);
// myLinkedList.append(0);
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
// myLinkedList.append(5);
// myLinkedList.append(6);
// myLinkedList.rotate();
// myLinkedList.removeFirst();
myLinkedList.removeAt(2);

let test = "";
