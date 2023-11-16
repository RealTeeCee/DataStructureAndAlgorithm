//1.2.3
let cnt = 1;
function factorial(n) {
  if (n < 0) return "number can't be negative";
  else if (n === 0) return 1;
  else {
    console.log(n);
    return n * factorial(n - 1);
  }
}

console.log(factorial(3));
 