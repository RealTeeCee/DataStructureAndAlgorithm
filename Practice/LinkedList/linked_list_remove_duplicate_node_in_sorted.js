/*
Given two lists sorted in increasing order, create and return a new list representing 
the intersection of the two lists. The new list should be made with its own memory 
— The original lists should not be changed. 

Example: 

Input: 
First linked list: 1->2->3->4->6
Second linked list be 2->4->6->8, 
Output: 2->4->6.
The elements 2, 4, 6 are common in both the list so they appear in the intersection list. 

Input: 
First linked list: 1->2->3->4->5
Second linked list be 2->3->4, 
Output: 2->3->4
The elements 2, 3, 4 are common in both the list so they appear in the intersection list.
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
    if (this.length === 0) {
      this.head = obj;
      this.tail = this.head;
    } else {
      obj.next = this.head;
      this.head = obj;
    }
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
  // c
  // 1-->1-->2-->2-->3-->3-->3-->x
  // c   s
  // 1-->1-->2-->2-->3-->3-->3-->x
  // c       s
  // 1-->1-->2-->2-->3-->3-->3-->x
  // c       s
  // 1------>2-->2-->3-->3-->3-->x
  // c
  // 2-->2-->3-->3-->3-->x
  // c   s
  // 2-->2-->3-->3-->3-->x
  // c       s
  // 2-->2-->3-->3-->3-->x
  // c       s
  // 2------>3-->3-->3-->x
  // c
  // 3-->3-->3-->x
  // c   s
  // 3-->3-->3-->x
  // c       s
  // 3-->3-->3-->x
  // c       s
  // 3------>3-->x
  // c
  // 3-->x
  // c
  // x

  removeDuplicate() {
    let currentNode = this.head;
    let second = currentNode.next;

    while (second !== null) {
      second = currentNode.next;
      if (second !== null && currentNode.value === second.value) {
        second = second.next;
        currentNode.next = second;
        this.length--;
      } else {
        currentNode = currentNode.next;
      }
    }
    return this.head;
  }

  removeDuplicateV2() {
    let result = this.head;
    let currentNode = this.head;
    while (currentNode !== null) {
      let temp = currentNode;
      while (temp !== null && temp.value === currentNode.value) {
        temp = temp.next;
      }
      currentNode.next = temp;
      currentNode = currentNode.next;
    }
    let test = "";
  }

  
}
const linkedList1 = new LinkedList();
linkedList1.append(4);
linkedList1.append(4);
linkedList1.append(2);
linkedList1.append(2);
linkedList1.append(3);
linkedList1.append(3);
linkedList1.append(3);

console.log(linkedList1.removeDuplicate());
