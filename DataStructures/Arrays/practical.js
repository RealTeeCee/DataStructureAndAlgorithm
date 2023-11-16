
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

function indicesOfTwoNumbers(nums = [], target){
    let output = [];
    let i = 0;
    let j = 1;
    for (let i = 0; i < nums.length;) {
        if(target - nums[j] === nums[i]){
            output.push(i)
            output.push(j)
            return output;
        }
        if(j === nums.length - 1){
            i++;
            j = 0;
            continue;
        }
        j++;       
    }
}
function indicesOfTwoNumbersV2(nums = [], target){
    let output = [];
    let i = 0;
    let j = 1;
    while(i < nums.length){
        if(target - nums[j] === nums[i]){
            output.push(i)
            output.push(j)
            return output;
        }
        if(j === nums.length - 1){
            i++;
            j = 0;
            continue;
        }
        j++;       
    }
}



console.log(indicesOfTwoNumbers([2,7,11,15,-2],22));
console.log(indicesOfTwoNumbers([2,7,11,15,-2],22));

const twoSum = function (nums, target) {
    const objTemp = {};
  
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (objTemp[target - num] != null) {
        return [objTemp[target - num], i];
      }
      objTemp[num] = i;
    }
  };

  
console.log(twoSum([2,7,11,15,-2],22));
  