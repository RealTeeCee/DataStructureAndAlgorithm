// 0 1 1 2 3 5 8
const fibonacci = (n) => {
  if (n === 0) return [0];
  else if (n === 1) return [0, 1];
  if (n > 1) {
    let arr = fibonacci(n - 1);
    arr.push(arr[n - 2] + arr[n - 1]);
    return arr;
  }
};

console.log(fibonacci(4));
