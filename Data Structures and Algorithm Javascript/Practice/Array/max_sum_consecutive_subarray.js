/*
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

1 <= nums.length <= 105

Follow up: If you have figured out the O(n) solution, 
try coding another solution using the divide and conquer approach, which is more subtle.
*/
//Input: nums = [1,-1,-2, 40, -1 ,2]   Output: 41
const maxSubArray2 = function (arr = []) {
  if (arr.length === 1) return arr[0];
  else {
    let sum = 0;
    let max = Math.pow(-10, 4);
    console.log(max)
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (arr[i] > sum) sum = arr[i];
      if (sum > max) max = sum;
    }
    return max;
  }
};

const maxSubArray = function (arr = []) {
  if (arr.length === 1) return arr[0];
  else {
    return findMaxSum(arr, 0, arr.length, 0);
  }
};

function findMaxSum(arr = [], s, e, max) {
  let m = Math.floor((s + e) / 2);
  let newArr1 = arr.slice(s, m + 1);
  let newArr2 = arr.slice(m + 1, e + 1);

  let sum1 = newArr1.reduce((total, ele) => total + ele, 0);
  newArr1.forEach((e) => {
    if (e > sum1) sum1 = e;
  });
  let sum2 = newArr2.reduce((total, ele) => total + ele, 0);
  newArr2.forEach((e) => {
    if (e > sum2) sum2 = e;
  });
  let sumMax = sum1 + sum2;

  let maxInAllSum = Math.max(sumMax, sum1, sum2);
  if (maxInAllSum > max) max = maxInAllSum;

  if (s === e) {
    return max;
  } else {
    max =
      findMaxSum(newArr1, s, m + 1, max) +
      findMaxSum(newArr2, 0, newArr2.length - 1, max);
    return max;
  }
}

console.log(maxSubArray2([0,1,0,-1,0,1]));
let test = 0;
