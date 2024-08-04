class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(n) {
    this.data[this.length] = n;
    this.length++;
  }

  //1 2 3
  //0 1 2 3
  unshift(n) {
    for (let i = this.length; i > 0; i--) {
      const element = this.data[i - 1];
      this.data[i] = element;
    }
    this.data[0] = n;
    this.length++;
  }
  //0 1 2 3
  shift(index) {
    const returnVal = this.data[index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;

    return returnVal;
  }

  pop() {
    const popVal = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return popVal;
  }

  get(index){
    return this.data[index];
  }
}

const a = new Array();
a.push(1);
a.push(2);
a.push(3);
a.unshift(0);
console.log(a.pop());
console.log(a.get(1));
let test = 0;
