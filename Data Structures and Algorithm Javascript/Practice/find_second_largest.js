/*
Given an array of integers, our task is to write a program that efficiently 
finds the second-max element present in the array.

Input: arr[] = {12, 35, 1, 10, 34, 1}
Output: The second max element is 34.
Explanation: The max element of the 
array is 35 and the second max element is 34

Input: arr[] = {10, 5, 10}
Output: The second max element is 5.
Explanation: The max element of 
the array is 10 and the second max element is 5

Input: arr[] = {10, 10, 10}
Output: The second max does not exist.
Explanation: Largest element of the array 
is 10 there is no second max element
*/

const findSecond = (arr = []) => {
  let max = 0;
  for (const i of arr) {
    if (i > max) max = i;
  }
  let second = -1;
  for (const i of arr) {
    if (i > second && i < max) second = i;
  }
  console.log(second === -1 ? "The second max does not exist." : second);
};

// findSecond([12, 35, 1, 10, 34, 1]);
// findSecond([10, 5, 10]);
// findSecond([10, 10, 10]);

function findSecondV2(arr) {
  if (arr.length < 2) {
    return "Array must have at least two elements.";
  }
  let max = Number.NEGATIVE_INFINITY;
  let second = Number.NEGATIVE_INFINITY;

  for (const i of arr) {
    if (i > max) {
      second = max;
      max = i;
    } else if (i > second && i < max) {
      second = i;
    }
  }

  console.log(second > Number.NEGATIVE_INFINITY ? second : "The second max doesn't exist.");
}

findSecondV2([-12, -35, -1, -10, -34, 1]);
findSecondV2([-10, 5, -10]);
findSecondV2([10, 10, 10]);
