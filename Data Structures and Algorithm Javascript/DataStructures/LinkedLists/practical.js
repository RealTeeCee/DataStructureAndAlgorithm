/*
You are given two non-empty linked lists representing two non-negative integers. The digits are 
stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and 
return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let obj = new Node(value);
    this.tail.next = obj;
    this.tail = obj;
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

  reverse() {
    if (!this.head.next) return this;
    let previousNode = null;
    let currentNode = this.head;
    let nextNode = null;
    let tail = this.head;
    while (currentNode !== null) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    this.head = previousNode;
    this.tail = tail;
    return this;
  }

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

  /*
    Example 1:
    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.
    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]

    return the sum 2 reverse linked list
*/
  static sumReverseDigit(l1, l2) {
    let l1ReverseHead = l1.reverse().head;
    let l2ReverseHead = l2.reverse().head;
    const arrl1 = [];
    const arrl2 = [];

    while (l1ReverseHead !== null) {
      arrl1.push(l1ReverseHead.value.toString());
      l1ReverseHead = l1ReverseHead.next;
    }
    while (l2ReverseHead !== null) {
      arrl2.push(l2ReverseHead.value.toString());
      l2ReverseHead = l2ReverseHead.next;
    }

    const sum = +arrl1.join("") + +arrl2.join("");
    const sumArr = sum.toString().split("");

    const returnLinkedList = new LinkedList(sumArr[0]);
    for (let i = 1; i < sumArr.length; i++) {
      returnLinkedList.prepend(+sumArr[i]);
    }
    console.log(returnLinkedList);
  }
}

/*
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/
// CASE 1
// const l1 = new LinkedList(2);
// l1.append(4);
// l1.append(3);
// const l2 = new LinkedList(5);
// l2.append(6);
// l2.append(4);

//CASE 2
// const l1 = new LinkedList(9);
// l1.append(9);
// l1.append(9);
// l1.append(9);
// l1.append(9);
// l1.append(9);
// l1.append(9);
// const l2 = new LinkedList(9);
// l2.append(9);
// l2.append(9);
// l2.append(9);

//CASE 3
// const l1 = new LinkedList(0);
// const l2 = new LinkedList(0);

//CASE 4
// const l1 = new LinkedList(9);
// const l2 = new LinkedList(9);

//CASE 5
const l1 = new LinkedList(99);
const l2 = new LinkedList(1);

LinkedList.sumReverseDigit(l1, l2);
