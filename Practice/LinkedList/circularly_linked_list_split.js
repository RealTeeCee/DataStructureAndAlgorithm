// It's a list that is linked
// Contain a set of Node. Each node have two element: value of value you want to store and pointer to the next node in line
// First node is head and the last is tail.
// Why linked List:

// Iterate lower than array, However, these inserts that we can do in the middle of a link list is a lot better than an array.

class Node {
  constructor(value, next) {
    // this.setValue(value);
    // this.setNext(next);
    this.value = value;
    this.next = next;
  }
  // getNext() {
  //   return this.next;
  // }
  // setNext(next) {
  //   this.next = next;
  // }
  // getValue() {
  //   return this.value;
  // }
  // setValue(value) {
  //   this.value = value;
  // }
}

class CircularlyLinkedList {
  constructor() {
    this.tail = new Node(null, null);
    this.length = 0;
  }

  append(value) {
    this.prepend(value);
    this.tail = this.tail.next;
  }
  prepend(value) {
    if (this.length === 0) {
      this.tail = new Node(value, null);
      this.tail.next = this.tail;
    } else {
      let newNode = new Node(value, this.tail.next);
      this.tail.next = newNode;
    }

    this.length++;
  }

  rotate() {
    if (this.tail) {
      this.tail = this.tail.next;
    }
  }

  removeFirst() {
    if (this.length === 0) return null;
    let head = this.tail.next;
    if (head === this.tail) {
      this.tail = null;
    } else {
      this.tail.next = head.next;
    }
    this.length--;
    return head;
  }

  removeLast() {
    for (let i = this.length; i > 1; i--) {
      this.rotate();
    }
    this.removeFirst();
  }
  // 1 2 3 4
  // 1 2 4
  removeAt(index) {
    if (this.length === 0) return;
    if (this.length === 1) return this.removeFirst();

    let tail = this.tail;
    for (let i = index; i > 0; i--) {
      tail = tail.next;
    }
    tail.next = tail.next.next;
    tail = this.tail;

    this.length--;
  }

  split() {
    if (this.length < 2) return;
    let half = Math.floor(this.length / 2);
    const l1 = new CircularlyLinkedList();
    const l2 = new CircularlyLinkedList();
    let head1 = this.tail.next;
    while (half) {
      l1.append(head1.value);
      head1 = head1.next;
      half--;
    }
    let head2 = head1;
    while (head2.value !== l1.tail.next.value) {
      l2.append(head2.value);
      head2 = head2.next;
    }
    return l1, l2;
  }
  splitList() {
    let head = this.tail.next;
    let head1, head2;
    let list1 = this.tail.next; // Head
    let list2 = this.tail.next; // Head
    /* If there are odd nodes in the circular list then
    list2->next becomes head 
    and for even nodes
    list2->next->next becomes head */
    while (list2.next !== head && list2.next.next !== head) {
      list2 = list2.next.next;
      list1 = list1.next;
    }
    /* If there are even elements in list then move list2 */
    if (list2.next.next === head) {
      list2 = list2.next;
    }
    /* Set the head pointer of first half */
    head1 = head;
    /* Set the head pointer of second half */
    if (head.next !== head) {
      head2 = list1.next;
    }
    /* Make second half circular */
    list2.next = list1.next;
    /* Make first half circular */
    list1.next = head;
  }
}

const myLinkedList = new CircularlyLinkedList();

myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);

myLinkedList.splitList();
let test = "";

