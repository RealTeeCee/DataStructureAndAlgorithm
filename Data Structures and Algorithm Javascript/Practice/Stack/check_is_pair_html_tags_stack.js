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

function isHTML(str) {
  const stack = new Stack();
  let index = str.indexOf("<");
  while (index !== -1) {
    const nextIndex = str.indexOf(">", index);
    if (nextIndex === -1) {
      return false;
    }
    const tag = str.substring(index, nextIndex + 1);
    if (tag.startsWith("</")) {
      const expectedOpeningTag = "</" + stack.pop() + ">";
      if (tag !== expectedOpeningTag) {
        return false;
      }
    } else {
      const tagName = tag.slice(1, -1).trim().toLowerCase();
      stack.push(tagName);
    }
    index = str.indexOf("<", nextIndex);
  }
  return stack.length() === 0;
}

function isPair(str = "") {
  const opening = "({[";
  const closing = ")}]";
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (opening.indexOf(str[i]) !== -1) {
      stack.push(str[i]);
    } else if (closing.indexOf(str[i] !== -1)) {
      if (stack.length() === 0) return false;
      if (closing.indexOf(str[i]) !== opening.indexOf(stack.pop())) {
        return false;
      }
    }
  }
  return stack.length() === 0;
}

console.log(isHTML("<body><center><h1>The Little Boat</h1></center></body>"));
// console.log(isPair("()(())({[]}){}"));
