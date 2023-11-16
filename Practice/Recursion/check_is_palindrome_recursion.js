/*
Input: arr[] = {3, 6, 0, 0, 6, 3}
Input: arr[] = {3, 6, 0, 6, 3}
Output: Palindrome

Input: arr[] = {1, 2, 3, 4, 5}
Output: Not Palindrome 
*/

const isPalindrome = (arr = [], start, end) => {
  if (start >= end) return true;
  if (arr[start] === arr[end]) return isPalindrome(arr, start + 1, end - 1);
  else {
    return false;
  }
};

console.log(isPalindrome([3, 6, 5, 6, 6, 3], 0, 5));
