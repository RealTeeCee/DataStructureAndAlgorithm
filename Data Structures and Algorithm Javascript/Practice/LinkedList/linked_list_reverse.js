export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList {
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

  reverse() {
    let first = this.head;
    let second = first.next;
    this.tail = this.head;
    while (second !== null) {
      let third = second.next;
      second.next = first;
      first = second;
      second = third;
    }
    this.head.next = null;
    this.head = first;

    console.log(this.printList());
  }
  //p   c   n   
  //x   1-->2-->3-->x
  //x<--1   2-->3-->x
  //    p  c,n   
  //x<--1   2-->3-->x
  //==================
  //        p  c,n   
  //x<--1<--2-->3   x
  //==================
  //            p  c,n 
  //x<--1<--2<--3   x
  reverseV2() {
    let prev = null;
    let current = this.head;
    let next = null;
    this.tail = this.head;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head.next = null;
    this.head = prev;

    console.log(this.printList());
  }
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

  //x --> 1 --> 2 --> 3 --> x

  //      1 <-- 2
  //            3
}

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
const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
// myLinkedList.prepend(1);
// myLinkedList.insert();
// myLinkedList.insert(2, 99);
// myLinkedList.insert(0, 199);
// myLinkedList.insert(10, 299);
// myLinkedList.remove(2);
// myLinkedList.remove(4);
// myLinkedList.remove(5);
myLinkedList.reverseV2();
//   myLinkedList.printList();

//   const newLinkedList = new LinkedList(1);
//   newLinkedList.append(2);
//   newLinkedList.append(3);
//   newLinkedList.append(4);

//   myLinkedList.compare(newLinkedList);
//   newLinkedList.clone();
