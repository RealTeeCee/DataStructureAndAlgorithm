/* Merge sorted array
[1,5,7] [2,4,6] -> [1,2,4,5,6,7]
*/

function mergeArr(arr1 = [], arr2 = []) {
  const arr3 = [];
  let arr1Val = arr1[0];
  let arr2Val = arr2[0];
  let i = 1;
  let j = 1;

  while (arr1Val !== undefined || arr2Val !== undefined) {
    if (arr1Val <= arr2Val || arr2Val === undefined) {
      arr3.push(arr1Val);
      arr1Val = arr1[i];
      i++;
    } else if (arr2Val <= arr1Val || arr1Val === undefined) {
      arr3.push(arr2Val);
      arr2Val = arr2[j];
      j++;
    }
  }

  return arr3;
}

// console.log(mergeArr([1, 2, 3, 5, 8], [0, 5, 6, 7]));
// console.log(mergeArr([1, 2, 3, 5], [0, 5, 6, 7]));
// console.log(mergeArr([1, 2, 3], [4, 5, 6, 7]));
console.log(mergeArr([4,6,8,19,20,30], [0]));
