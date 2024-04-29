class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
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
      this.tail.next = obj;
      this.tail = obj;
    }
    this.length++;
  }

  prepend(val) {
    const obj = new Node(val);
    obj.next = this.head;
    this.head = obj;
    this.length++;
  }

  insert(val, i) {
    const obj = new Node(val);
    if (i === 0) {
      this.prepend(val);
      return;
    }
    if (i >= this.length - 1) {
      this.append(val);
      return;
    }
    let cur = this.head;
    // i = 0, cur = 1; i = 1, cur = 2
    for (let index = 0; index < i; index++) {
      cur = cur.next;
    }
    //cur = 2, cur.next = 4
    //obj = 3, 3->4

    obj.next = cur.next;
    cur.next = obj;

    // const temp = cur.next;
    // cur.next = obj;
    // obj.next = temp;
    this.length++;
  }

  remove(i) {
    if (i === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let cur = this.head;
    for (let index = 0; index < i - 1; index++) {
      cur = cur.next;
    }
    cur.next = cur.next.next;
    if (i === this.length - 1) this.tail = cur;
    this.length--;
  }
  reverse() {
    let prev = null;
    let cur = this.head;
    let next = null;
    while (cur) {
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    const head = this.tail;
    const tail = this.head;
    this.head = head;
    this.tail = tail;
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);


linkedList.reverse();

const test = "";
