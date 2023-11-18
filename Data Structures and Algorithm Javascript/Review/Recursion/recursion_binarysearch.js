const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const binarysearch = (arr = [], target, start, end) => {
  const half = Math.floor((start + end) /2)

  if (start > end) return false;

  if (target === arr[half]) return true;
  else if (target < arr[half]) {
    return binarysearch(arr, target, start, half - 1);
  } else {
    return binarysearch(arr, target, half + 1, end);
  }
};

console.log(binarysearch(arr, 10, 0, 7));
