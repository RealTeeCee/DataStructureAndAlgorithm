class Stack {
  constructor() {
    this.data = [];
  }

  length() {
    return this.data.length;
  }

  peek() {
    return this.data[this.length() - 1];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    this.data.pop();
  }
}
