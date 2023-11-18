/*
Input: L = 1, R = 10
Output: 
Even numbers: 2 4 6 8 10
Odd numbers: 1 3 5 7 9

Input: L = 10, R = 25 
Output: 
Even numbers:10 12 14 16 18 20 22 24 
Odd numbers:11 13 15 17 19 21 23 25
*/

const printEven = (l, r) => {
  if (l > r) return;
  if (l % 2 === 0) {
    console.log(l);
    printEven(l + 2, r);
  } else {
    printEven(l + 1, r);
  }
};
const printOdd = (l, r) => {
  if (l > r) return;
  if (l % 2 === 1) {
    console.log(l);
    printOdd(l + 2, r);
  } else {
    printOdd(l + 1, r);
  }
};

// printEven(1, 11);
printOdd(1, 12);
