/* 
Given an array arr[] of size N-1 with integers in the range of [1, N], the task is to find 
the missing number from the first N integers.

Note: There are no duplicates in the list.

Examples: 

Input: arr[] = {1, 2, 4, 6, 3, 7, 8}, N = 8
Output: 5
Explanation: The missing number between 1 to 8 is 5


Input: arr[] = {1, 2, 3, 5}, N = 5
Output: 4
Explanation: The missing number between 1 to 5 is 4
*/
// Đề bài chưa rõ a ơi!!
//
const findMissingNumb = (arr = [], n) => {
  arr.sort((a, b) => a - b);
  let i = 0;
  let newArray = [];
  while (i < arr.length && arr[i] !== n) {
    if (arr[i + 1] - arr[i] !== 1) {
      let sequence = arr[i + 1] - arr[i];
      for (let j = 1; j < sequence; j++) {
        newArray.push(arr[i] + j);
      }
    }
    i++;
  }
  console.log(newArray);
};
// findMissingNumb([1, 2, 4, 6, 3, 7, 8], 8);
// findMissingNumb([1, 3, 5, 7, 8], 8);
// findMissingNumb([1, 2, 3, 5], 5);
// findMissingNumb([1, 2, 3, 6, 7, 10], 10);
// findMissingNumb([1, 2, 3, 5, 9, 10, 13, 20], 13);

const findMissingNumbV2 = (arr = [], n) => {
  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    sum += arr[i];
  }
  console.log((n * (n + 1)) / 2 - sum);
};
//   1 2 3 4 5 ... n: Total = n(n+1)/2

const findMissingNumbV3 = (arr = [], n) => {
  let obj = {};
  let check = false;
  for (let i = 0; i <= n - 1; i++) {
    if (check) {
      if (obj[arr[i]] !== 0 && obj[n - arr[i]] === undefined) {
        return obj[arr[i]];
      }
    } else {
      if (i === n - 1) {
        i = -1;
        check = true;
        continue;
      }
      obj[arr[i]] = n - arr[i];
    }
  }
};
//   1 2 3 4 5 ... n: Total = n(n+1)/2
console.log(findMissingNumbV3([1, 2, 4, 6, 8, 7, 3], 8));
console.log(findMissingNumbV3([1, 2, 9, 8, 7, 6, 5, 4], 9));
console.log(findMissingNumbV3([1, 3, 7, 5, 6, 2], 7));

// function findMissingv1(arr, size) {
//   let i;
//   for (i = 0; i < size; i++) {
//     if (Math.abs(arr[i]) - 1 == size) {
//       continue;
//     }
//     let ind = Math.abs(arr[i]) - 1;
//     arr[ind] *= -1;
//   }

//   let ans = size + 1;
//   for (i = 0; i < size; i++) {
//     if (arr[i] > 0) ans = i + 1;
//   }

//   console.log(ans);
// }
// findMissingv1(arr, n);

let arr = [1, 3, 7, 5, 6, 2];
let n = arr.length;

function findMissingv3(arr, N) {
  let i;
  let temp = [];
  for (i = 0; i <= N; i++) {
    temp[i] = 0;
  }

  for (i = 0; i < N; i++) {
    temp[arr[i] - 1] = 1;
  }

  let ans = 0;
  for (i = 0; i <= N; i++) {
    if (temp[i] == 0) {
      ans = i + 1;
    }
  }
  console.log(ans);
}

findMissingv3(arr, n);
