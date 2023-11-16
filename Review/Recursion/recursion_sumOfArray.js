const arr = [1, 2, 3];

const sumOfArray = (arr = [], start, end) => {
  if (start >= end) return arr[start];
  return arr[start] + sumOfArray(arr, start + 1, end);
};

// console.log(sumOfArray([], 0, 5));

const sumOfArrayV2 = (arr = [], length) => {
  if (length === 0) return 0;
  return arr[length - 1] + sumOfArrayV2(arr, length - 1);
};

console.log(sumOfArrayV2(arr, arr.length));
