class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(val) {
    const obj = new Node(val);
    if (this.length === 0) {
      this.head = obj;
      this.tail = this.head;
    } else {
      obj.prev = this.tail;
      this.tail.next = obj;
      this.tail = obj;
    }
    this.length++;
    return;
  }

  prepend(val) {
    const obj = new Node(val);
    obj.next = this.head;
    this.head.prev = obj;
    this.head = obj;
    this.length++;
    return;
  }

  insert(val, i) {
    if (i >= this.length) {
      console.log("SAI ROI");
      return;
    }
    if (i === 0) return this.prepend(val);
    if (i === this.length - 1) return this.append(val);
    const node = new Node(val);
    let cur = this.head;
    for (let index = 0; index < i - 1; index++) {
      cur = cur.next;
    }
    node.prev = cur;
    node.next = cur.next;
    cur.next.prev = node;
    cur.next = node;
    this.length++;
  }

  remove(i) {
    if (i >= this.length) {
      console.log("SAI ROI");
      return;
    }
    if (i === 0) {
      this.head.next.prev = null;
      this.head = this.head.next;
      this.length--;
    }
    let cur = this.head;
    for (let index = 0; index < i - 1; index++) {
      cur = cur.next;
    }
    if (cur.next.next) {
      cur.next.next.prev = cur;
    }
    cur.next = cur.next.next;
    if (i === this.length - 1) this.tail = cur.next;
    this.length--;
  }
}

const doublyLL = new DoublyLinkedList();
doublyLL.append(1);
doublyLL.append(2);
doublyLL.append(3);
doublyLL.append(4);

doublyLL.remove(2);
const test = "";
