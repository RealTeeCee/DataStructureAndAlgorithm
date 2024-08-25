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

  append(value) {
    let n = new Node(value);

    if (this.length === 0) {
        this.head = n;
    } else {
        this.tail.next = n;
        let test = 0;
    }
    
    this.tail = n;
    this.length++;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(3);

let test = 1;