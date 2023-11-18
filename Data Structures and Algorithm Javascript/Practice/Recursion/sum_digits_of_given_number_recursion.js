/*
Given a number, we need to find sum of its digits using recursion.
Examples: 
 

Input : 12345
Output : 15

Input : 45632
Output :20
*/

const sum = (x) => {
  if (x === 0) return 0;
  else {
    return (x % 10) + sum(Math.floor(x / 10));
  }
};

console.log(sum(999));
