const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const scoreBoard = new Array(10);
function addScore(score) {
  if (numberEntry < scoreBoard.length || score > scoreBoard[numberEntry - 1]) {
    if (numberEntry < scoreBoard.length) {
      numberEntry++;
    }
    let j = numberEntry - 1;
    while (j > 0 && scoreBoard[j - 1] < score) {
      scoreBoard[j] = scoreBoard[j - 1];
      j--;
    }
    scoreBoard[j] = score;
  }
}

function insertionSort(array = []) {
  for (let i = 0; i < array.length; i++) {
    let j = i;
    const cur = array[i];
    while (j > 0 && array[j - 1] > cur) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = cur;
  }
  return array;
}

function insertionSortUdemy(arr = []) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] < arr[0]) {
      //move number to the first position
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      //find where number should go
      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          //move number to the right spot
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
  }
  return arr;
}

console.log(insertionSort(numbers));
let test = 0;
