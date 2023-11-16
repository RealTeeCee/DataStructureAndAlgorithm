/*
Given a doubly-linked list, rotate the linked list counter-clockwise by N nodes. 
Here N is a given positive integer and is smaller than the count of nodes in linked list.
Examples:  

Input : a  b  c  d  e   N = 2
Output : c  d  e  a  b 

Input : a  b  c  d  e  f  g  h   N = 4
Output : e  f  g  h  a  b  c  d
*/

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
  //Input :  a<->b<->c<->d<->e<->f<->g<->h   N = 4
  //Output : e<->f<->g<->h<->a<->b<->c<->d
  rotateLeft(n) {
    let currentNode = this.head;
    let rightNode = currentNode;
    let leftNode = currentNode;

    let i = 1;
    while (rightNode !== null) {
      if (i === n) {
        rightNode = rightNode.next;
        rightNode.prev = null;
        let test = "";
        break;
      }
      rightNode = rightNode.next;
      i++;
    }
    i = 0;
    while (leftNode !== null) {
      if (i === n) {
        leftNode = leftNode.prev;
        leftNode.prev = rightNode;
        // rightNode.prev = leftNode;
        let test = "";
        break;
      }
      leftNode.next.prev = leftNode;
      leftNode = leftNode.next;
      i++;
    }

    let test = "";
  }
  //Input :  a<->b<->c<->d<->   e<->f<->g<->h->   N = 4
  //Output : e<->f<->g<->h<->a<->b<->c<->d
  rotateLeftV1(n) {
    if (n === 0) return;
    let currentNode = this.head;

    while (n) {
      currentNode = currentNode.next;
      n--;
    }
    let tail = currentNode.prev; // Lưu lại tail mới
    let newHead = currentNode; // Lưu lại head mới
    tail.next = null; // Next của tail mới bằng null
    currentNode.prev = null; // Prev của head mới bằng null
    while (currentNode.next !== null) {
      currentNode = currentNode.next; // Lấy phần tử cuối linked (Right)
    }
    currentNode.next = this.head; // Next của (Right) là head của left
    this.head.prev = currentNode; // Prev của head cũ chính là node cuối cùng của right
    this.head = newHead; // Gán lại head bằng newHead
    this.tail = tail; // Gan lai tail
    let test = "";
  }
}

const myLinkedList = new DoublyLinkedList("a");
myLinkedList.append("b");
myLinkedList.append("c");
myLinkedList.append("d");
myLinkedList.append("e");
myLinkedList.append("f");
myLinkedList.append("g");
myLinkedList.append("h");

myLinkedList.rotateLeftV1(4);

// Hieu bai vua roi chua ? Dạ hiểu 88% 12% là sắp hiểu. Là chưa hiểu. Rồi sẽ quên