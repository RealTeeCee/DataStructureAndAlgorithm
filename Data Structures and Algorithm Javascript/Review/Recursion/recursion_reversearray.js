const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const reverseArray = (arr = [], start, end) => {
  if (start >= end) {
    return;
  }

  [arr[start], arr[end]] = [arr[end], arr[start]];

  reverseArray(arr, start + 1, end - 1);
};

reverseArray(arr, 0, 7);
console.log(arr);
