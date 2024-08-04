/* 
Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 
Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

var containsDuplicate = function (arr = []) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) return true;
    set.add(arr[i]);
  }
  return false;
};

for (let i = 0; i < arr.length; i++) {
  if (arr.indexOf(arr[i]) !== i) {
    return true;
  }
}
return false;

console.log(containsDuplicate([4, 3, 2, 4, 2]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 2, 3, 1]));
