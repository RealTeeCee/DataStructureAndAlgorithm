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
    return this.data.pop();
  }
}

const reverse = (arr = []) => {
  const stack = new Stack();
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = stack.pop();
  }
  return arr;
};

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

let arr = [1, 2, 3, 4, 5];

console.log(reverse(arr));
let test = 0;
