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
function nonRepeatLongestSubstring(str = "") {
  let obj = {};
  let arr = [];
  let temp = "";
  let k = 0;
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined && i !== str.length - 1) {
      obj[str[i]] = i;
    } else {
      if (i === str.length - 1 && obj[str[i]] === undefined) {
        i++;
      }
      temp = str.substring(k, i);
      arr.push(temp);
      i = obj[str[i]];
      k = i + 1;
      obj = {};
    }
  }

  let returnStr = "";
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length > returnStr.length) {
      returnStr = arr[j];
    }
  }
  return returnStr;
}

console.log(nonRepeatLongestSubstring("pwwksqwwwwwckew"));
console.log(nonRepeatLongestSubstring("pwwksqererrwwwwwckew"));
console.log(nonRepeatLongestSubstring("pwwp"));
console.log(nonRepeatLongestSubstring("abcabcbb"));
console.log(nonRepeatLongestSubstring("aaabcdddabdcbb"));
console.log(nonRepeatLongestSubstring("pwwkew"));
console.log(nonRepeatLongestSubstring("abcd"));
console.log(nonRepeatLongestSubstring("abb"));
console.log(nonRepeatLongestSubstring("aabb"));
console.log(nonRepeatLongestSubstring("aaaa"));
console.log(nonRepeatLongestSubstring("wwppe"));
console.log(nonRepeatLongestSubstring("pwwksqwckeen"));
console.log(nonRepeatLongestSubstring("pwwksqwcen"));
console.log(nonRepeatLongestSubstring("nonRepeatLongestSubstring"));
