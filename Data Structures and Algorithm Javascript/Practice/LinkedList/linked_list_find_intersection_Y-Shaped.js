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
  //First linked list: 1->2->3->4->6
  //Second linked list be 2->4->6->8,
  //Output: 2->4->6.
  intersect(l1, l2) {
    let obj = {};
    let longerNode = l1.length > l2.length ? l1.head : l2.head;
    let shorterNode = l1.length < l2.length ? l1.head : l2.head;
    let newLinkedList = new LinkedList();

    while (longerNode !== null) {
      obj[longerNode.value] = 1;
      longerNode = longerNode.next;
    }
    while (shorterNode !== null && obj[shorterNode.value]) {
      newLinkedList.append(shorterNode.value);
      shorterNode = shorterNode.next;
    }
    console.log(newLinkedList.length > 0 ? newLinkedList : null);
  }
  // 1  2  3  4  5 6
  // 1  2  4  6  8
  // 1  2  3  4  5 6
  intersectV2(l1, l2) {
    let l1Node = l1.head;
    let l2Node = l2.head;
    let newLinkedList = new LinkedList();

    while (l1Node !== null && l2Node !== null) {
      if (l1Node.value === l2Node.value) {
        newLinkedList.append(l1Node.value);
        l2Node = l2Node.next;
        l1Node = l1Node.next;
      } else if (l1Node.value > l2Node.value) {
        l2Node = l2Node.next;
      } else {
        l1Node = l1Node.next;
      }
    }
    console.log(newLinkedList.length > 0 ? newLinkedList : null);
  }

  //         10 30
  //   3 6 9 15 30
  //         10 30
  //   3 6 9 10
  //      10 15 30
  //   3 6 9 15 30
  intersectYShaped(l1, l2) {
    let set = new Set();
    let head1 = l1.head;
    while (head1 !== null) {
      set.add(head1);
      head1 = head1.next;
    }
    let head2 = l2.head;
    while (head2 !== null) {
      if (set.has(head2)) {
        return head2;
      }
      head2 = head2.next;
    }
  }

  intersectYShapedV2(l1, l2) {
    let head1 = l1.head;
    while (head1 !== null) {
      let head2 = l2.head;
      while (head2 !== null) {
        if (head2.value === head1.value) {
          return head2;
        }
        head2 = head2.next;
      }
      head1 = head1.next;
    }
  }

  //         10 30
  //   3 6 9 15 30
  //         10 30
  //   3 6 9 10
  //      10 15 30
  //   3 6 9 15 30
  intersectYShapedV3(l1, l2) {
    let head1 = l1.head;
    let head2 = l2.head;
    while (head1 !== null || head2) {
      if (head2 === head1) {
        return head2;
      } else {
        if (head1.next === null) {
          head1 = l1.head;
          head2 = head2.next;
        } else {
          head1 = head1.next;
        }
      }
      let test = "";
    }
  }
  intersectYShapedV3(l1, l2) {
    let head1 = l1.head;
    let head2 = l2.head;
    while (head1 !== null || head2) {
      if (head2 === head1) {
        return head2;
      } else {
        if (head1.next === null) {
          head1 = l1.head;
          head2 = head2.next;
        } else {
          head1 = head1.next;
        }
      }
      let test = "";
    }
  }
  intersectYShapedV4(l1, l2) {
    let head1 = l1.head;
    let head2 = l2.head;
    while (head1 !== head2) {
      head1 = head1.next;
      head2 = head2.next;
      if (head1 === head2) {
        return head1;
      }
      if (head1 === null) {
        head1 = l2.head;
      }
      if (head2 === null) {
        head2 = l1.head;
      }
    }
    return head1;
  }
}
const linkedList1 = new LinkedList();
linkedList1.append(10);
linkedList1.append(15);
linkedList1.append(30);

const linkedList2 = new LinkedList();
linkedList2.append(3);
linkedList2.append(6);
linkedList2.append(9);
linkedList2.head.next.next.next = linkedList1.head.next;

// const linkedList1 = new LinkedList();
// linkedList1.append(3);
// linkedList1.append(6);
// linkedList1.append(9);
// linkedList1.append(15);
// linkedList1.append(30);

// const linkedList2 = new LinkedList();
// linkedList2.append(10);
// linkedList2.head.next = linkedList1.head.next.next.next.next;

console.log(new LinkedList().intersectYShapedV4(linkedList1, linkedList2));
