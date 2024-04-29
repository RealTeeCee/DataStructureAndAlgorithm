//3,2,1 -> 4
//4,3,2
class Game {
  constructor(n) {
    this.arr = new Array(n);
    this.cnt = 0;
  }

  insertVal(val) {
    if (this.cnt < this.arr.length) {
      this.cnt++;
    }
    // 660  510 L:2
    // 660  510 L: 2, CNT: 3
    //  0    1   2
    let j = this.cnt - 1; // IDX:2
    while (j > 0 && this.arr[j - 1] < val) {
      this.arr[j] = this.arr[j - 1];
      j--;
    }
    this.arr[j] = val;
  }

  removeIdx(i) {
    // 660 590 510
    // 0    1   2
    //remove 1
    //  0   1<->2
    // 660 510
    if (i < 0 || i >= this.cnt) return;

    let index = i;
    while (index < this.cnt - 1) {
      this.arr[index] = this.arr[index + 1];
      index++;
    }
    delete this.arr[this.cnt - 1];
    this.cnt--;
  }
}

const game = new Game(3);
game.insertVal(660);
game.insertVal(510);
game.insertVal(590);

game.removeIdx(0);
const test = "";

//1,2,3
//1,1,3 i=0
//3,1,2 i=1
function sort(arr = []) {

  for (let i = 1; i < arr.length; i++) {

    let cur = arr[i]; 
    let j = i;
    while (j > 0 && arr[j - 1] < cur) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = cur;
   
  }
}

const test2 = [1, 3, 5, 10, 4, 6];
sort(test2);

let a = 0;
