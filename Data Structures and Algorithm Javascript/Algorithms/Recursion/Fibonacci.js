//0 1 1 2 3 5 8
//F0 = 0; F1 = 1
//Fn = Fn-1 + Fn-2, n > 1
const fibonacciArrV2 = (n) => {
  let arr = [];
  arr.push(0);
  if ((n > 0 && n <= 2) || n > 2) {
    arr.push(1);
    arr.push(1);
    if (n > 2) {
      for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
      }
    }
  }
  return arr;
};
const fibonacciArr = (n) => {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
};

const fibonacci = (n) => {
  if (n === 0) return [n];
  else if (n === 1) {
    return [0, n];
  }
  let arr = fibonacci(n - 1);
  arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  return arr;
};

// console.log(fibonacciArr(8));
console.log(fibonacci(8));
