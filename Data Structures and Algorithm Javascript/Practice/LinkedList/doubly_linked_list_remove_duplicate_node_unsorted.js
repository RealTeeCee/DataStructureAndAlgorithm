class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  destroyRef() {
    this.tail = null;
  }
  // 1 <-- --> 2
  append(value) {
    let obj = new Node(value);
    obj.prev = this.tail;
    this.tail.next = obj;
    this.tail = obj;
    this.length++;
  }

  prepend(value) {
    let obj = new Node(value);
    obj.next = this.head;
    this.head.prev = obj;
    this.head = obj;
    this.length++;
  }

  removeFirst() {
    let firstValue = this.head.value;
    if (this.length !== 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
    }
    return firstValue;
  }

  removeLast() {
    let lastValue = this.tail.value;
    if (this.length !== 0) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
    }
    return lastValue;
  }
  // 1-->2-->3-->4

  remove(index) {
    if (this.length === 0) {
      return;
    }

    if (index === 0) {
      this.removeFirst();
    }

    if (index >= this.length - 1) {
      this.removeLast();
    }

    let node = this.getNodeAt(index - 1);
    node.next = node.next.next;
    node.next.prev = node;

    if (index === this.length - 1) {
      this.tail = node;
    }
    this.length--;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(array);
  }
  //1, 2, 4
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index >= this.length) {
      this.append(value);
      return;
    }
    // 1 --> 2 --> 4
    let node = this.getNodeAt(index - 1);
    let obj = new Node(value);
    const nextObj = node.next;
    node.next = obj;
    obj.next = nextObj;
    obj.prev = node;
    nextObj.prev = obj;

    this.length++;
  }

  getNodeAt(index) {
    let i = 0;
    let node = this.head;
    while (i < index) {
      node = node.next;
      i++;
    }
    return node;
  }

  //f   s   t
  //1-->2-->3-->x
  //1<--2   3-->x
  //    f   s
  //1<--2   3-->x
  //===============
  //    f   s   t
  //1<--2   3-->x
  //1<--2<--3   x
  //        f   s
  //1<--2<--3   x
  //head.next = null
  //head = first => fisrt.next = null;

  reverseV4() {
    if (!this.head.next) return;
    let first = this.head;
    this.tail = this.head; // head
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    } // c -> n -> n.n
    this.head.next = null;
    this.head = first;
  }

  //this.tail = this.head
  //x-->1-->2-->3   x
  //        n
  //x-->1-->2-->3   x
  //x<--1-->2-->3   x
  //   p,c  n
  //x<--1-->2-->3   x
  //    p  c,n
  //x<--1-->2-->3   x
  //=====================
  //    p   c   n
  //x<--1-->2-->3   x
  //x<--1<--2-->3   x
  //       p,c  n
  //x<--1<--2-->3   x
  //        p  c,n
  //x<--1<--2-->3   x
  //=====================
  //head.next = null
  //head = first => fisrt.next = null;

  reverse() {
    if (!this.head.next) return;
    let previousNode = null;
    let currentNode = this.head;
    let nextNode = null;
    let tail = this.head;
    while (currentNode !== null) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
      let test = "";
    }

    this.head = previousNode;
    this.tail = tail;
    let test2 = "";
  }
  reverseV2() {
    let node = this.head;
    let returnNode = new LinkedList(node.value);
    while (node.next !== null) {
      returnNode.prepend(node.next.value);
      node = node.next;
    }
    this.head = returnNode.head;
    this.tail = returnNode.tail;
  }
  reverseV3() {
    if (this.length < 2) return;
    let node = this.head;
    let length = this.length;
    while (node.next !== null) {
      this.prepend(node.next.value);
      node = node.next;
    }
    for (let i = this.length; i > length; i--) {
      this.remove(i);
    }
  }
  //8 4 4 6 6 8 4 10 12 12
  //8 4 6 10 12 12
  removeDuplicate() {
    let set = new Set();
    let currentNode = this.head;
    while (currentNode !== null) {
      if (set.has(currentNode.value)) {
        if (currentNode.next) currentNode.next.prev = currentNode.prev;
        if (currentNode.prev) currentNode.prev.next = currentNode.next;
      } else {
        set.add(currentNode.value);
      }
      if (currentNode.next === null) {
        this.tail = currentNode.prev;
      }
      currentNode = currentNode.next;
    }
    let test = "";
  }
  //8 4 4 6 6 8 4 10 12 12
  //8 4 6 10 12 12
  removeDuplicateV2() {
    // let currentNode = this.head;
    let currentNode, next;
    for (
      currentNode = this.head;
      currentNode != null;
      currentNode = currentNode.next
    ) {
      next = currentNode.next;
      while (next !== null) {
        if (currentNode.value === next.value) {
          if (next.next !== null) next.next.prev = next.prev;
          if (next.prev !== null) next.prev.next = next.next;
          next = next.next;
          this.length--;
        } else {
          next = next.next;
        }
      }
      if (currentNode.next === null) {
        this.tail = currentNode
      }
    }
    return this.head;
  }

  removeDuplicateSorted() {
    let currentNode = this.head;
    let second = currentNode.next;

    while (second !== null) {
      second = currentNode.next;
      if (second !== null && currentNode.value === second.value) {
        if (second.next) second.next.prev = second.prev;
        second = second.next;
        currentNode.next = second;
        this.length--;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.head.prev = null;
    this.tail = currentNode;
    return this.head;
  }

  removeDuplicateSortedV1() {
    let currentNode = this.head;

    while (currentNode.next !== null) {
      if (currentNode.value === currentNode.next.value) {
        if (currentNode.next.next !== null) {
          currentNode.next.next.prev = currentNode.next.prev;
        }
        if (currentNode.next.prev !== null) {
          currentNode.next.prev.next = currentNode.next.next;
        }

        this.length--;
      } else {
        currentNode = currentNode.next;
      }
    }
    return this.head;
  }
}

const myLinkedList = new DoublyLinkedList(8);
myLinkedList.append(4);
myLinkedList.append(4);
myLinkedList.append(6);
myLinkedList.append(6);
myLinkedList.append(8);
myLinkedList.append(4);
myLinkedList.append(10);
myLinkedList.append(12);
myLinkedList.append(12);

myLinkedList.removeDuplicateV2();
