// 1 2 3 4 6 7 8

const isContain = (arr, x, start, end) => {
  if (start > end) {
    return false;
  }
  let mid = Math.floor((end + start) / 2);
  if (arr[mid] === x) return true;
  if (arr[mid] > x) {
    return isContain(arr, x, start, mid - 1);
  } else {
    return isContain(arr, x, mid + 1, end);
  }
};

console.log(isContain([1, 2, 3, 4, 6, 7, 8], 2, 0, 7));
