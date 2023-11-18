import SinglyLinkedList from "../LinkedLists/SinglyLinkedList.js";

class Stack {
  constructor() {
    this.data = new SinglyLinkedList();
  }

  length(){
    return this.data.length;
  }

  peek() {
    return this.data.head.value;
  }

  push(value) {
    this.data.prepend(value);
  }

  pop() {
    this.data.removeFirst()
  }
}

const stack = new Stack();

stack.push("google");
stack.push("youtube");
stack.push("fb");
stack.pop();
let length = stack.length();
let test = 0;
