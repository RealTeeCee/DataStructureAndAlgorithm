const sumInArr = (arr, length) => {
  if (length === 0) return 0;
  if (length === 1) return arr[0];

//   length--;
  console.log(arr[length]);
  return arr[length - 1] + sumInArr(arr, length - 1);
};

console.log(sumInArr([1, 2, 3], 3));
