class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = this.head;
      this.length = 0;
    }
  
    prepend = (value) => {
      const newNode = new Node(value);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
    };
  
    append = (value) => {
      const newNode = new Node(value);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    };
  
    removeFirst() {
      if (this.length === 0) return;
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      this.length--;
      if (this.length === 0) this.tail = null;
      return this.head;
    }
  
    removeLast() {
      if (this.length === 0) return;
      else if (this.length === 1) {
        this.removeFirst();
      } else {
        let currentNode = this.head;
        while (currentNode.next.next) {
          currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
      }
    }
  
    removeAt(index) {
      if (this.length === 0) return;
      else if (this.length === 1 || index === 0) {
        this.removeFirst();
      } else {
        let currentNode = this.head;
        let i = 0;
        while (i < index - 1) {
          currentNode = currentNode.next;
          i++;
        }
        currentNode.next.next.prev = currentNode;
        currentNode.next = currentNode.next.next;
        if (!currentNode.next) this.tail = currentNode;
      }
    }
  
    removeAtRecursion(node, index) {
      if (index === 0) return node;
      else {
        if (index === 1) return node.next;
  
        node.next = this.removeAtRecursion(node.next, index - 1);
        if (!node.next) this.tail = node;
  
        return node;
      }
    }
  
    insertAt(index, value) {
      if (index === 0) this.prepend(value);
      else if (this.length === 0 || index === this.length - 1) this.append(value);
      else {
        let currentNode = this.head;
        let i = 0;
        while (i < index) {
          currentNode = currentNode.next;
          i++;
        }
        const newNode = new Node(value);
        currentNode.next.prev = newNode;
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
      }
    }
  
    reverse() {
      let first = new Node(null);
      let second = this.head;
      this.tail = this.head;
  
      while (second) {
        let third = second.next;
        first.prev = second;
        second.next = !first.value ? null : first;
        first = second;
        second = third;
      }
  
      this.head = first;
      this.head.prev = null;
    }
  
    reverseRecursive(cur) {
      if (!cur.next) {
        return cur;
      } else {
        let node = this.reverseRecursive(cur.next);
        cur.next.next = cur;
        if(cur.next.next) cur.next.next.prev = cur.next;
        cur.next = null;
        
        if (!node.next.next) {
          node.prev = null;
          node.next.prev = node;
        }
        
        this.tail = cur;
        this.head = node;
        return node;
      }
    }
  }
  
  const doublyLinkedList = new DoublyLinkedList();
  // doublyLinkedList.prepend(1);
  // doublyLinkedList.prepend(2);
  // doublyLinkedList.prepend(3);
  // doublyLinkedList.prepend(4);
  // doublyLinkedList.prepend(5);
  // doublyLinkedList.prepend(6);
  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  doublyLinkedList.append(3);
  doublyLinkedList.append(4);
  doublyLinkedList.append(5);
  // doublyLinkedList.removeFirst();
  // doublyLinkedList.removeAt(2);
  
  // console.log(doublyLinkedList.removeAtRecursion(doublyLinkedList.head, 4));
  // doublyLinkedList.insertAt(4, 0);
  // doublyLinkedList.reverseRe();
  doublyLinkedList.reverseRecursive(doublyLinkedList.head);
  let test = 0;
  