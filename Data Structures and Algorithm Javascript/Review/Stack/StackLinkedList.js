class Stack {
  constructor() {
    this.bottom = null;
    this.top = null;
    this.length = 0;
  }

  peek() {
    if (this.length > 0) return this.top;
    return null;
  }

  pop() {
    if (this.length > 0) {
      let returnNode = this.top;
      this.top = returnNode.next;
      this.length--;
      if(this.length === 0) this.bottom = null;
      return returnNode.value;
    }
    return null;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);

let test = 0;


