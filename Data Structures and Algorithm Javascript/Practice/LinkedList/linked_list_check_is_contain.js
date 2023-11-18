/*
There are two singly linked lists in a system. By some programming error, the end node of one
of the linked lists got linked to the second list, forming an inverted Y-shaped list. 
Write a program to get the point where two linked lists merge.
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

  //Check if linkedlist have circle
  isCircular() {
    let currentNode = this.head;
    for (let i = 0; i <= this.length; i++) {
      if (currentNode === null) return false;
      currentNode = currentNode.next;
    }
    return true;
  }
  isContain(l1) {
    let l2Node = this.head;
    let l1Node = l1.head;

    for (let i = 0; i < this.length - l1.length; i++) {
      l2Node = l2Node.next;
    }
    while (l2Node !== null) {
      if (l2Node.value !== l1Node.value) {
        return false;
      } else {
        l2Node = l2Node.next;
        l1Node = l1Node.next;
      }
    }
    return true;
  }
  isContainV2(l1) {
    let l2Node = this.head;
    let l1Node = l1.head;

    while (l2Node) {
      if (l2Node.value === l1Node.value) {
        let temp1 = l1Node;
        let temp2 = l2Node;
        while (temp1 && temp2 && temp1.value === temp2.value) {
          temp1 = temp1.next;
          temp2 = temp2.next;
        }
        if (temp1 === null) {
          return true;
        }
      }
      l2Node = l2Node.next;
    }
    return false;
  }
}
// Returns true if first list is
// present in second list
function findList(first, second) {
  let ptr1 = first,
    ptr2 = second;
  // If both linked lists are empty, return true
  if (first == null && second == null) return true;
  // Else If one is empty and other is not, return false
  if (first == null || (first != null && second == null)) return false;
  // Traverse the second list by picking nodes one by one
  while (second != null) {
    // Initialize ptr2 with current node of second
    ptr2 = second;
    // Start matching first list with second list
    while (ptr1 != null) {
      // If second list becomes empty and first not then return false
      if (ptr2 == null) return false;
      // If value part is same, go to next of both lists
      else if (ptr1.value == ptr2.value) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
      }
      // If not equal then break the loop
      else break;
    }
    // Return true if first list gets traversed completely that means it is matched.
    if (ptr1 == null) return true;
    // Initialize ptr1 with first again
    ptr1 = first;
    // And go to next node of second list
    second = second.next;
  }
  return false;
}
const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append(2);
linkedList1.append(3);
linkedList1.append(4);

const linkedList2 = new LinkedList();
linkedList2.append(1);
linkedList2.append(2);
linkedList2.append(3);
linkedList2.append(4);
linkedList2.append(3);

console.log(linkedList2.isContainV2(linkedList1));
