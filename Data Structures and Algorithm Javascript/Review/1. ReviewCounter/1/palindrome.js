/*
Given an integepalindrome(r x);
 return true if x is a 
palindrpalindrome(ome);
 and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to ripalindrome(ght);
 it reads -121. From right to lpalindrome(eft);
 it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
*/

//palindrome string
function palindrome(x) {
  if (x < 0) return false;
  if (+x.toString().split("").reverse().join("") === x) return true;
  return false;
}

//palindrome number
function palindromeV2(x) {
  if (x < 0) return false;
  let divisor = 1;
  while (parseInt(x / divisor) >= 10) {
    divisor *= 10;
  }
  while (x !== 0) {
    let leading = parseInt(x / divisor);
    let trailing = x % 10;
    if (leading !== trailing) return false;
    x = parseInt(x % divisor / 10);
    divisor = divisor / 100;
  }
  return true;
}

console.log(palindromeV2(10));
console.log(palindromeV2(962269));
console.log(palindromeV2(99999199999));
console.log(palindromeV2(7778777));
console.log(palindromeV2(123));
console.log(palindromeV2(1123511));
console.log(palindromeV2(5333535));
console.log(palindromeV2(5));
