let count = 0;
const findMax = (arr = [], firstIdx) => {
  count++;
  console.log(count);
  if (arr[firstIdx + 1] !== undefined) {
    let max = arr[firstIdx];
    // if (max < findMax(arr, firstIdx + 1)) {
    //   return findMax(arr, firstIdx + 1);
    // }
    return Math.max(max, findMax(arr, firstIdx + 1));
  } else {
    return arr[firstIdx];
  }
};

// 6, [3, 5 , 7]
// 6, 3, [5, 7]
// 6, 3, 5, [7]
console.log(findMax([6, 3, 7, 5], 0));

