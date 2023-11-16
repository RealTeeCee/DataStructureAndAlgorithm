/*Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:
0 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

//Input: nums = [100,4,200,1,3,2]
//Output: 4

const consecutiveNumbs = (arr = []) => {
  arr.sort((a, b) => a - b);
  let cnt = 1;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i + 1] - 1) cnt++;
    if(arr[i] === arr[i + 1] || arr[i] > arr[i + 1]) continue;
  }
  console.log(cnt);
};

consecutiveNumbs([0,0,1,1,3,3,4,4,5,5])