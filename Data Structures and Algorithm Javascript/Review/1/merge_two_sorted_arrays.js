const arr1 = [0, 3, 4, 31, 40, 41, 42, 43];
const arr2 = [4, 6, 30, 43];

function mergeSortedArrays(array1 = [], array2 = []) {
  let arr1Item = array1[0];
  let arr2Item = array2[0];
  let i = 1;
  let j = 1;
  const returnArray = [];
  while (arr1Item || arr2Item) {
    if (arr1Item === undefined || arr2Item < arr1Item) {
      returnArray.push(arr2Item);
      arr2Item = array2[j];
      j++;
    } else {
      returnArray.push(arr1Item);
      arr1Item = array1[i];
      i++;
    }
  }
  return returnArray;
}

console.log(mergeSortedArrays(arr1, arr2));
