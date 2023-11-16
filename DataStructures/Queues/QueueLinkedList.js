import SinglyLinkedList from "../LinkedLists/SinglyLinkedList.js";

class Queue {
  #data;

  constructor() {
    this.#setData();
  }

  #setData() {
    this.#data = new SinglyLinkedList();
  }

  getData() {
    return this.#data;
  }

  length() {
    this.#data.length;
  }

  peek() {
    return this.#data.head;
  }

  enqueue(value) {
    this.#data.append(value);
  }

  dequeue() {
    this.#data.removeFirst();
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();

const result = queue.getData();
let test = 0;
