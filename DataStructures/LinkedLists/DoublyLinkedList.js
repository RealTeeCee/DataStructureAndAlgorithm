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
}

//1 --> 10 --> x --> 5 --> 16
// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }
const myLinkedList = new DoublyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
// myLinkedList.prepend(123);
// myLinkedList.removeFirst();
// myLinkedList.append(123);

// myLinkedList.removeLast();

// myLinkedList.insert();
// myLinkedList.insert(2, 99);
// myLinkedList.insert(0, 199);
// myLinkedList.insert(10, 299);
myLinkedList.remove(2);
myLinkedList.insert(2, 3);
// myLinkedList.remove(4);
// myLinkedList.remove(5);
// myLinkedList.reverse();
myLinkedList.printList();
