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

function consecutiveNumbs(arr = []) {
  arr.sort((a, b) => a - b);
  let cnt = 1;
  let temp = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] === 1) {
      cnt++;
    } else {
      if (arr[i] === arr[i + 1]) continue;
      temp = cnt > temp ? cnt : temp;
      cnt = 1;
    }
  }
  console.log(cnt > temp ? cnt : temp);
}
consecutiveNumbs([0, 0, 1, 1, 3, 3, 4, 4, 5, 5, 7, 7, 8, 8, 9, 9, 10, 10, 11]);
consecutiveNumbs([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
consecutiveNumbs([100, 4, 200, 1, 3, 2]);
consecutiveNumbs([100, 4, 200, 1]);
