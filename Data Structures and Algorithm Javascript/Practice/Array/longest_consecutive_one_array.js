/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Explanation: 
The first two digits or the last three digits are consecutive 1s. 
The maximum number of consecutive 1s is 3.

Ex: 
Input: nums = [1,0,1,1,0,1]
Output: 2
Input: nums = [1,1,0,1,1,1]
Output: 3

Constraints:

1 <= nums.length <= 10^5
nums[i] is either 0 or 1.
*/

function longestConsecutiveOfOne(arr = []) {
  let cnt = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
        cnt++;
        max = max > cnt ? max : cnt;
    } else {
        cnt = 0;
    }
  }
  return max;
}
const nums1 = [1, 0, 1, 1, 0, 1];
const nums2 = [1, 1, 0, 1, 1, 1];

console.log(longestConsecutiveOfOne(nums2));
