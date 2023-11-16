/*
Input : 3
Output : 6
Explanation : 1 + 2 + 3 = 6

Input : 5
Output : 15
Explanation : 1 + 2 + 3 + 4 + 5 = 15
*/

const sum = (n) => {
  if (n <= 1) return n;
  else {
    return n + sum(n - 1);
  }
};

console.log(sum(3));
