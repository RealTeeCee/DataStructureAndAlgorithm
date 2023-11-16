// 1 2 3 4 6 7 8

const binarySum = (arr, start, end) => {
  if (start > end) {
    return 0;
  }
  if (start === end) {
    return arr[start];
  } else {
    let mid = Math.floor((end + start) / 2);
    return binarySum(arr, start, mid) + binarySum(arr, mid + 1, end);
  }
};

console.log(binarySum([1, 2, 3, 4, 6, 7, 8], 0, 6));
