const reverse = (arr = [], start, end) => {
  if (start !== end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverse(arr, start + 1, end - 1);
  }
  return arr;
};

console.log(reverse([1, 2, 3, 4, 5], 0, 4));
