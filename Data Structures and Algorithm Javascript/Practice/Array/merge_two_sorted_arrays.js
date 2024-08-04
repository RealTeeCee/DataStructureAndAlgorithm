const arr1 = [0,3,4,31,40,41,42,43];
const arr2 = [4,6,30,43];

function mergeSortedArrays(array1 = [], array2 = []) {
    const returnArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
  
    while (array1Item || array2Item) {
      if (array2Item === undefined || array1Item < array2Item) {
        returnArray.push(array1Item);
        array1Item = array1[i];
        i++;
      } else {
        returnArray.push(array2Item);
        array2Item = array2[j];
        j++;
      }
    }
    return returnArray;
}
console.log(mergeSortedArrays(arr1, arr2));