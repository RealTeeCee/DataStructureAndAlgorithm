class Array2 {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(val) {
    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    const pop = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return pop;
  }

  remove(i) {
    for (let index = i; index < this.length; index++) {
      this.data[index] = this.data[index + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  removeFirst() {
    return this.remove(0);
  }

  peek(i) {
    return this.data[i];
  }

  reverse1(){
    let cnt = this.length - 1;
    for (let i = 0; i < this.length / 2; i++) {
        [this.data[i], this.data[cnt]] = [this.data[cnt], this.data[i]]
        cnt--;
    }
    return this;
  }

  reverse2(){
    let cnt = 0;
    for (let i = this.length - 1; i >= this.length / 2; i--) {
        let temp = this.data[i];
        this.data[i] = this.data[cnt];
        this.data[cnt] = temp;
        cnt++;
    }
    return this;
  }

  
}

const arr = new Array2();
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);

// console.log(arr.reverse2());

const a = 0;

// "abcd" 
// "dcba"

function reverseStr(str = ""){
    let rStr = "";
    for (let i = str.length  - 1; i >= 0 ; i--) {
        rStr += str[i];
    }
    return rStr;
}

// console.log(reverseStr("abcd"))

