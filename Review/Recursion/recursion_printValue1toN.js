/*
Input: N = 5
Output: 1 2 3 4 5
Explanation: We have to print numbers from 1 to 5.

Input: N = 10
Output: 1 2 3 4 5 6 7 8 9 10
Explanation: We have to print numbers from 1 to 10.
 */

const print = (n) => {
  if (n === 1) console.log(n);
  else {
    print(n - 1);
    console.log(n);
  }
};

print(5);
