// Viết hàm insert để khi thêm vào (thêm đầu hoặc cuối) đều tự sắp xếp tăng dần.
// Arr tối đa 10 phần tử
// Input: 15 5 1 8 10 3 4 11 1 2 9 7 6 12 16
// Output: 2 3 5 8 9 10 12 13
let numberEntry = 0;
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

addScore(15);
addScore(5);
addScore(1);
addScore(8);
addScore(10);
addScore(3);
addScore(4);
addScore(11);
addScore(1);
addScore(2);
addScore(9);
addScore(7);
addScore(6);
addScore(12);
addScore(16);

console.log(scoreBoard);
