/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add 
up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

//Input: nums = [3,2,4], target = 6
//Output: [1,2]

function twoSum(arr, target) {
  let j = 1;
  let i = 0;
  for (let i = 0; i < arr.length; ) {
    if (target - arr[j] === arr[i]) return [i, j];
    if (j === arr.length - 1) {
      i++;
      j = -1;
    }
    j++;
  }
}

console.log(twoSum([2, 7, 11, 15, -2], 22));

function twoSumV2(arr, target) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[target - arr[i]] !== undefined) return [obj[target - arr[i]], i];
    obj[arr[i]] = i;
  }
}

console.log(twoSumV2([2, 7, 11, 15, -2], 22));
