const fibonacy = (n) => {
  if (n <= 1) {
    return [1, n];
  }
  let temp = fibonacy(n - 1);
  temp.push(temp[temp.length - 2] + temp[temp.length - 1]);
  return temp;
};


// temp.push(temp[temp.length - 2] + temp[temp.length - 1]);

const arr = [];
const fibonacci1 = (n) => {
  if (n <= 1) {
    arr.push(1);
    return [0, n];
  } else {
    const temp = fibonacci1(n - 1);
    console.log(temp);
    arr.push(temp[0] + temp[1]);
    return [temp[1], temp[0] + temp[1]];
  }
};


fibonacci1(10);
console.log(arr);
// function fibonacci_numbers(n) {
//   if (n == 0) {
//     return 0;
//   } else if (n == 1) {
//     return 1;
//   } else {
//     return fibonacci_numbers(n - 2) + fibonacci_numbers(n - 1);
//   }
// }

// let n = 7;
// for (let i = 0; i < n; i++) {
//   document.write(fibonacci_numbers(i) + " ");
// }
