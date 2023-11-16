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

const isPair = (str = "") => {
  let opening = "({[";
  let closing = ")}]";
  let stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (opening.indexOf(str[i]) !== -1) stack.push(str[i]);
    else if (closing.indexOf(str[i]) !== -1) {
      if (stack.length() === 0) return false;
      if (closing.indexOf(str[i]) !== opening.indexOf(stack.pop()))
        return false;
    }
  }
  return stack.length() === 0;
};

console.log(isPair("()(()){([()])}"));
console.log(isPair("((()(()){([()])}))"));
console.log(isPair(")(()){([()])}"));
console.log(isPair("({[])}"));
console.log(isPair("("));
