/*
Input : 20 21 45 89 89 90
Output : Yes

Input : 20 20 45 89 89 90
Output : Yes

Input : 20 20 78 98 99 97
Output : No
*/

const isSorted = (arr, length) => {
  if (length <= 1) return true;

  if (arr[length - 1] >= arr[length - 2]) {
    return isSorted(arr, length - 1);
  } else {
    return false;
  }
};
const isSortedV2 = (arr, first, next) => {
  if (arr.length <= 1) return true;
  if (next === arr.length) return true;
  if (arr[first] <= arr[next]) {
    return isSortedV2(arr, first + 1, next + 1);
  } else {
    return false;
  }
};

console.log(isSorted([20, 21, 45, 89, 89, 90], 6));
