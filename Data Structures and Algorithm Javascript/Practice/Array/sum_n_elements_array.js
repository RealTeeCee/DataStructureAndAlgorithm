/*
[1, 2, 3, 4, 5, 6 ]
*/

function sumArr(arr = []) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sumArr2(arr = []) {
  return (arr[arr.length - 1] * (arr[arr.length -1 ] + 1)) / 2;
}

console.log(sumArr2([1, 2, 3, 4, 5, 6]));
