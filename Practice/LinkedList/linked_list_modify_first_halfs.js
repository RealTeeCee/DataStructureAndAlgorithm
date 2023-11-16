/*
Given a singly linked list containing n nodes. Modify the value of first half nodes 
such that 1st node’s new value is equal to the last node’s value minus first node’s 
current value, 2nd node’s new value is equal to the second last node’s value minus 2nd 
node’s current value, likewise for first half nodes. If n is odd then the value of the 
middle node remains unchanged. (No extra memory to be used).

Examples:  

Input : 10 -> 4 -> 5 -> 3 -> 6
Output : 4 -> 1 -> 5 -> 3 -> 6

Input : 2 -> 9 -> 8 -> 12 -> 7 -> 10
Output : -8 -> 2 -> -4 -> 12 -> 7 -> 10
*/

export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  append(value) {
    let obj = new Node(value);
    if (this.length === 0) {
      this.head = obj;
      this.tail = this.head;
    } else {
      this.tail.next = obj;
      this.tail = obj;
    }
    this.length++;
  }

  prepend(value) {
    let obj = new Node(value);
    obj.next = this.head;
    this.head = obj;
    this.length++;
  }

  removeFirst() {
    let returnNode = this.head.value;
    if (this.length !== 0) {
      this.head = this.head.next;
      this.length--;
    }
    return returnNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index >= this.length - 1) {
      this.append(value);
      return;
    }

    let node = this.getNodeAt(index - 1);
    let obj = new Node(value);

    obj.next = node.next;
    node.next = obj;

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

  remove(index) {
    if (this.length === 0) {
      return;
    }

    if (index === 0) {
      this.removeFirst();
    }

    if (index >= this.length) {
      index = this.length - 1;
    }

    let node = this.getNodeAt(index - 1);
    node.next = node.next.next;

    if (index === this.length - 1) {
      this.tail = node;
    }
    this.length--;
  }
  //f   s   t
  //1-->2-->3
  //1<--2   3
  //1-->2
  //2<--3   3
  //1<--2
  //1<--2<--3
  //=========
  //f   s   t
  //        2

  //Consider two lists to be equivalent if they have the same length and contents
  //that are element-by-element equivalent.
  compare(linkedList2) {
    if (this.length !== linkedList2.length) return false;
    let list2Node = linkedList2.head;
    let currentNode = this.head;
    while (list2Node !== null) {
      if (currentNode.value !== list2Node.value) return false;
      list2Node = list2Node.next;
      currentNode = currentNode.next;
    }
    return true;
  }

  clone() {
    if (this.length === 0) return;
    let currentNode = this.head;
    const cloneLinkedList = new LinkedList(currentNode.value);
    while (currentNode.next !== null) {
      cloneLinkedList.append(currentNode.next?.value);
      currentNode = currentNode.next;
    }
    console.log(cloneLinkedList);
  }

  //Input :   1 ->  2 -> 3 -> 4 -> 5 ->6 ->7
  //Output : -4 -> -2 -> 3 -> 4 -> 5
  //Input :   2 -> 9 ->  8  -> 12 -> 7 -> 10
  //Output : -8 -> 2 -> -4  -> 12 -> 7 -> 10
  transformFirstHalf() {
    if (this.length < 2) return this;
    let currentNode = this.head;
    let half = Math.floor(this.length / 2);
    while (half) {
      currentNode = currentNode.next;
      half--;
    }

    let prev = null;
    while (currentNode !== null) {
      let next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }

    let lead = this.head;
    let trail = this.tail;
    half = Math.floor(this.length / 2);
    while (half) {
      lead.value = lead.value - trail.value;
      lead = lead.next;
      prev = prev.next;
      trail = prev;
      half--;
    }

    let rightHalf = this.tail;
    while (rightHalf !== null) {
      let next = rightHalf.next;
      rightHalf.next = prev;
      prev = rightHalf;
      rightHalf = next;
    }
    this.tail.next = null;
    let test = "";
  }
}
// c n
// 1 2 3 x
// c   n
// 1 2 3 x
//   c   n
// 1 2 3 x


const split = (head) => {
  let current;
  let next;
  current = head;
  next = head.next;
  while (next !== null) {
    next = next.next;
    if (next !== null) {
      current = current.next;
      next = next.next;
    }
  }
  front = head;
  back = current.next;
  current.next = null;
};

const reverseList = (head) => {
  var current, prev, next;
  current = head;
  prev = null;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
};

const modifyContent = (front, back) => {
  let front1 = front,
    back1 = back;
  while (back1 != null) {
    front1.value = front1.value - back1.value;
    front1 = front1.next;
    back1 = back1.next;
  }
};

const concate = (front, back) => {
  if (front === null) return back;
  let head = front;
  while (front.next !== null) front = front.next;
  front.next = back;
  return head;
};

const myLinkedList = new LinkedList();
myLinkedList.append(2);
myLinkedList.append(9);
myLinkedList.append(8);
myLinkedList.append(12);
myLinkedList.append(7);
myLinkedList.append(10);
myLinkedList.append(12);

let front = null;
let back = null;
split(myLinkedList.head);
back = reverseList(back);
modifyContent(front, back);
back = reverseList(back);
myLinkedList.head = concate(front, back);
console.log("");
// myLinkedList.transformFirstHalf();
// console.log(myLinkedList.printList());
