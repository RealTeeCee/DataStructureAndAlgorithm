// 1 2 3 4 5
// 1 2 3 5 4
// 1 2 5 3 4

const reverseArr = (arr, start, end) => {
  if (start !== end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverseArr(arr, start + 1, end - 1);
  }
};

console.log(reverseArr([1, 2, 3, 4, 5], 0, 4));
