const sum = (arr, length) => {
  if (length === 0) return 0;
  if (length === 1) return arr[length - 1];
  else {
    return arr[length - 1] + sum(arr, length - 1);
  }
};

console.log(sum([], 0));
