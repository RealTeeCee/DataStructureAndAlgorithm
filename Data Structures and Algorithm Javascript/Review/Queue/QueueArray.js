class Queue {
  #value;
  constructor() {
    this.#value = [];
  }

  length() {
    return this.#value.length;
  }

  peek() {
    if (this.length() === 0) return null;
    return this.#value[0];
  }

  enqueue(x) {
    this.#value.push(x);
  }

  dequeue() {
    if (this.length() === 0) return null;
    return this.#value.shift();
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
console.log("Dequeue: " + queue.dequeue());
console.log(queue.peek());
console.log(queue);

let test = 0;
