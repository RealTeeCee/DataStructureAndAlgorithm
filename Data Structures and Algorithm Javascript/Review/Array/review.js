class Game {
  constructor(n) {
    this.cnt = 0;
    this.arr = new Array(n);
  }

  // cnt = 1
  // i = 0
  // insert

  // cnt = 2
  // i = 1
  //

  insertScore(val) {
    if (val > this.arr[this.cnt - 1] || this.cnt < this.arr.length) {
      if (this.cnt < this.arr.length) {
        this.cnt++;
      }

      let i = this.cnt - 1;
      while (i > 0 && this.arr[i - 1] < val) {
        this.arr[i] = this.arr[i - 1];
        i--;
      }
      this.arr[i] = val;
    }
  }

  // 7 5 2
  // 0 1 2
  // 0 2 2
  // 0 2

  removeScore(index) {
    if (index < 0 || index >= this.cnt) {
      console.log("Sai rồi!!!");
      return;
    }

    for (let i = index; i < this.cnt; i++) {
      this.arr[i] = this.arr[i + 1];
    }

    delete this.arr[this.cnt - 1];
    this.cnt--;
  }
}

const game = new Game(3);
game.insertScore(5);
game.insertScore(2);
game.insertScore(4);

game.removeScore(2);

//5,4,3,6
//5,4,3,6, i = 1, j = i = 1, arr[i] = arr[j] = 4, arr[j-1] =  5,  false
//5,4,3,6, i = 2, j = i = 2, arr[i] = arr[j] = 3, arr[j-1] =  4,  false
//5,4,3,6, i = 3, j = i = 3, arr[i] = arr[j] = 6, arr[j-1] =  4,  true
//5,4,_,3, i = 3, j -1  = 2, arr[i] = 6, arr[j-1] = 3, true
//5,_,4,3, i = 3, j -1  = 1, arr[i] = 6, arr[j-1] = 5, true
//_,5,4,3, i = 3, j -1  = 0, arr[i] = 6, arr[j-1]= undefine, stop
//6,5,4,3, i = 3, j

function baihoisang(array = []) {
  for (let i = 0; i < array.length; i++) {
    let j = array.length - 1;
    while (j >= 0 && array[j - 1] < array[i]) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = array[i];
  }
}

function insertSort(array = []) {
  for (let index = 1; index < array.length; index++) {
    const val = array[index];
    let i = index;
    while (i > 0 && array[i - 1] < val) {
      array[i] = array[i - 1];
      i--;
    }
    array[i] = val;
  }
}
function insertSortReverse(arr = []) {
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    let j = i;
    while(j > 0 && arr[j - 1] > val){
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = val;
  }
}

const arr = [2, 4, 3, 6];
insertSort(arr);

const test = "";
