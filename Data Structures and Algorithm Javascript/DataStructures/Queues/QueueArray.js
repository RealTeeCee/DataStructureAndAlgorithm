class QueueArray {
  #data;
  #first;
  #length;
  constructor(size) {
    this.#setData(size);
    this.#setFirst(0);
    this.#setLength(0);
  }

  #setData(size) {
    this.#data = new Array(size);
  }

  #setFirst(value) {
    this.#first = value;
  }

  #setLength(length) {
    this.#length = length;
  }

  length() {
    return this.#length;
  }
  peek() {
    if (this.#length === 0) {
      return null;
    }
    return this.#data[this.#length];
  }

  enqueue(value) {
    if (this.#length === this.#data.length) {
      throw new Error("Queue is full");
    }
    let avail = (this.#first + this.#length) % this.#data.length;
    this.#data[avail] = value;
    this.#length++;
  }

  dequeue() {
    if (this.length() === 0) return "Queue is empty!";
    let eReturn = this.#data[this.#first];
    this.#data[this.#first] = null;
    this.#first = (this.#first + 1) % this.#data.length;
    this.#length--;
    return eReturn;
  }
}

let a = "";
let b = 0;

let queue = new QueueArray(3);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();

let test = 0;
