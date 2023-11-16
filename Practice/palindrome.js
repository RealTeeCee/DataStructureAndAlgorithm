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

function palindrome(x) {
  let length = 1;
  let factor = 10;
  let digit = 1;

  for (let i = 0; i <= length; i++) {
    if (x / factor > 1) {
      if (i === length - 1) {
        length++;
      }
      digit++;
      factor *= 10;
    }
  }

  factor = 10;
  let pow = 1;
  const arr = [];
  for (let j = 1; j <= digit; j++) {
    arr.push(
      parseInt((x % Math.pow(factor, pow)) / Math.pow(factor, j - 1), 0)
    );
    pow++;
  }

  let check = true;
  let cnt = 1;
  for (let k = 0; k < arr.length; k++) {
    let lastNum = arr[arr.length - cnt];
    if (arr[k] !== lastNum) {
      check = false;
    }
    cnt++;
  }

  if (check === true) {
    console.log(`${x} is Palidrome`);
  } else {
    console.log(`${x} is not Palidrome`);
  }

  //   console.log(digit);
}
function isPalindrome(x) {
  if (x < 0) return false;
  let divisor = 1;
  while (parseInt(x / divisor) >= 10) {
    divisor *= 10;
  }
  while (x != 0) {
    let leading = parseInt(x / divisor);
    let trailing = x % 10;
    if (leading != trailing) {
      return false;
    }
    x = parseInt((x % divisor) / 10);
    divisor = divisor / 100;
  }
  return true;
}

// palindrome(121);
// palindrome(123);
// palindrome(1123511);
// palindrome(5333535);
// palindrome(333);
// palindrome(33533);
// palindrome(101);
// palindrome(131);
// palindrome(151);
// palindrome(181);
// palindrome(191);
// palindrome(313);
// palindrome(353);
// palindrome(373);
// palindrome(383);
// palindrome(727);
// palindrome(757);
// palindrome(787);
// palindrome(797);
// palindrome(919);
// palindrome(929);
// palindrome(11311);
// palindrome(11411);
// palindrome(33533);
// palindrome(77377);
// palindrome(77477);
// palindrome(77977);
// palindrome(1114111);
// palindrome(1117111);
// palindrome(3331333);
// palindrome(3337333);
// palindrome(7772777);
// palindrome(7774777);
// palindrome(7778777);
// palindrome(111181111);
// palindrome(111191111);
// palindrome(777767777);
// palindrome(77777677777);
// palindrome(99999199999);
// palindrome(2);
// palindrome(3);
// palindrome(5);
// palindrome(7);
// palindrome(11);
// palindrome(96269);

console.log(isPalindrome(962269))
console.log(isPalindrome(99999199999))
console.log(isPalindrome(7778777))
console.log(isPalindrome(123));
console.log(isPalindrome(1123511));
console.log(isPalindrome(5333535));


