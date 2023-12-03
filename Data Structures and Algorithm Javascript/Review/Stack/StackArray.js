class Stack {
  #value;
  
  constructor() {
    this.#value = [];
  }

  length() {
    return this.#value.length;
  }

  peek() {
    if (this.length() > 0) return this.#value[this.length() - 1];
    return null;
  }

  pop() {
    if (this.length() > 0) {
      return this.#value.pop();
    }
    return null;
  }

  push(x) {
    this.#value.push(x);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.length());
