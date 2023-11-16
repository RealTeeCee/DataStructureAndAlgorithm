//give an array [2,5,1,2,3,5,1,2,4] -> return 2
//give an array [2,1,1,2,3,5,1,2,4] -> return 1
//give an array [2,1,3,4,3,5,1,2,4] -> return 3
//give an array [2,1,3,4,5,6,7,8,2] -> return 2
//give an array [2,3,4,5] -> return undefined

// [2,5,1,2,3,5,1,2,4] -> first recurring character (2)

// const arr = [2, 1, 3, 2];
// function getFirstRecurring(arr) {
//   // let recurringObj = {}
//   let i = 0;
//   let cnt = 1;
//   let j = i + cnt;
//   while (i < arr.length) {
//     while (j < arr.length) {
//       if (arr[j] === arr[i]) {
//         return arr[i];
//       }
//       if (j === arr.length - 1) {
//         i = 0;
//         if (cnt === arr.length - 1) {
//           if (arr[j] === arr[i]) {
//             return arr[i];
//           }
//           return undefined;
//         }
//         j = i + cnt++;
//         continue;
//       }
//       i++;
//       j++;
//     }
//   }
// }
// function getFirstRecurringv2(arr) {
//   // let recurringObj = {}
//   let i = 0;
//   let temp = Number.MAX_SAFE_INTEGER;

//   let result = undefined;
//   while (i < arr.length) {
//     let j = i + 1;
//     while (j < arr.length) {
//       if (arr[j] === arr[i]) {
//         if (j < temp) {
//           temp = j;
//           result = arr[j];
//         }
//       }
//       j++;
//     }
//     i++;
//   }
//   return result;
// }

// // [2,5,1,2,3,5,1,2,4] -> first recurring character (2)

// function getFirstRecurringv3(input = []) {
//   let index = Number.MAX_SAFE_INTEGER;
//   let result = undefined;
//   for (let i = 0; i < input.length; i++) {
//     if (i === 3) {
//       console.log(3);
//     }
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] === input[j]) {
//         if (j < index) {
//           index = j;
//           result = input[j];
//         }
//       }
//     }
//   }
//   return result;
// }

// function getFirstRecurringHashTable(arr = []) {
//   let recurringObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!recurringObj[arr[i]]) {
//       recurringObj[arr[i]] = 1;
//     } else {
//       return arr[i];
//     }
//   }
//   return undefined;
// }

// function firstRecurringCharacter1(input = []) {
//   let recurringObj = {};
//   for (let i = 0; i < input.length; i++) {
//     if (!recurringObj[input[i]]) {
//       recurringObj[input[i]] = 1;
//     } else {
//       return input[i];
//     }
//   }
//   return undefined;
// }

// console.log(getFirstRecurringHashTable(arr));

/* ============================================================================================================
Given a string s, find the length of the longest 
substring without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/*
Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

// function nonRepeatLongestSubstring(str) {
//   let obj = {};
//   let longestStrArr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       if (longestStrArr.length === 0) {
//         obj[i] = str.slice(0, i);
//       } else {
//         obj[i] = str.slice(obj[str[i]], i);
//       }
//       longestStrArr.push(obj[i]);
//     }
//     obj[str[i]] = i;
//   }
//   let longestStr = "";
//   for (let k = 0; k < longestStrArr.length; k++) {
//     if (longestStrArr[k].length > longestStr.length) {
//       longestStr = longestStrArr[k];
//     }
//   }
//   return longestStr;
// }

// function nonRepeatLongestSubstring(str) {
//   let obj = {};
//   let longestStrArr = [];
//   for (let i = 0; i < str.length; i++) {

//     if (obj[str[i]]) {

//       obj[i] = str.slice(obj[str[i]], i);
//       longestStrArr.push(obj[i]);
//     }
//     obj[str[i]] = i;
//   }
//   let longestStr = "";
//   for (let k = 0; k < longestStrArr.length; k++) {
//     if (longestStrArr[k].length > longestStr.length) {
//       longestStr = longestStrArr[k];
//     }
//   }
//   return longestStr;
// }

// console.log(nonRepeatLongestSubstring("pwwksqwckew"));
// console.log(nonRepeatLongestSubstring("asdzza"));

//cnt , max
function nonRepeatLongestSubstringNguyenV2(str) {
  let obj = {};
  let longestStrArr = [];
  let idx = 0;
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] !== undefined || i === str.length - 1) {
      let temp = str.substring(idx, i); //str.slice(obj[str[i]], i-1);
      idx = i;
      if (temp) {
        longestStrArr.push(temp);
        i = obj[str[i]];
        obj = {};
      }
    } else {
      // 5 6 7
      // w w w
      obj[str[i]] = i;
    }
  }
  let longestStr = "";
  for (let k = 0; k < longestStrArr.length; k++) {
    if (longestStrArr[k].length > longestStr.length) {
      longestStr = longestStrArr[k];
    }
  }
  return longestStr;
}

function nonRepeatLongestSubstringNguyenV3(str) {
  let obj = {};
  let max = 0;
  let idx = 0;
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] !== undefined || i === str.length - 1) {
      let temp = str.slice(idx, i); //str.slice(obj[str[i]], i-1);
      idx = i;
      if (temp.length > max) {
        max = temp.length;
        console.log(temp);
        i = obj[str[i]];
        obj = {};
      }
    } else {
      obj[str[i]] = i;
    }
  }
  return max;
}

// console.log(nonRepeatLongestSubstringNguyenV2("pwwksqwwwwwckew"));
// console.log(nonRepeatLongestSubstringNguyenV3("pwwksqererrwwwwwckew"));
// console.log(nonRepeatLongestSubstringNguyenV3("abcabcbb"));

/* ============================================================================================================
Example 1:

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
function consecutiveNumbs(nums) {
  // for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //         if(nums[j] < nums[i]){
  //             let temp = nums[j];
  //             nums[j] = nums[i];
  //             nums[i] = temp;
  //         }
  //     }
  // }
  nums.sort(function compareNumbers(a, b) {
    return a - b;
  });
  
  let arr = [];
  // 1,2,3,4,100
  for (let k = 0; k < nums.length; k++) {
    if (nums[k] === nums[k + 1]) {
      continue;
    }
    if (k === 0) arr.push(nums[0]);
    if (nums[k + 1] === nums[k] + 1) {
      arr.push(nums[k + 1]);
    }
  }
  return arr.length;
}
console.log(consecutiveNumbs([100, 4, 200, 1, 3, 2]));
