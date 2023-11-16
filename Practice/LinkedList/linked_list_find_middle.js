/*
Auxiliary Given a singly linked list, find the middle of the linked list. 
For example, if the given linked list is 1->2->3->4->5 then the output should be 3. 
If there are even nodes, then there would be two middle nodes, we need to print the second middle element. 
For example, if the given linked list is 1->2->3->4->5->6 then the output should be 4.
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

  // 1 2 3 4 5

  findMiddleNode = () => {
    if (this.length < 3) return this.tail;
    let currentNode = this.head;
    let i = Math.floor(this.length / 2) + 1;
    while (i > 1) {
      currentNode = currentNode.next;
      i--;
    }
    return currentNode;
  };
}

const linkedlist = new LinkedList(1);
// linkedlist.append(2);
// linkedlist.append(3);
// linkedlist.append(4);
// linkedlist.append(5);
// linkedlist.append(6);

console.log(linkedlist.findMiddleNode());


