const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let left = arr.slice(0, Math.floor(arr.length / 2));
//   let right = arr.slice(Math.floor(arr.length / 2), arr.length);
  let right = arr.slice(Math.floor(arr.length / 2));
  //Split Array into left and right
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const returnArray = [];
    let leftItem = left[0];
    let rightItem = right[0];
    let i = 1;
    let j = 1;
  
    while (leftItem || rightItem) {
      if (rightItem === undefined || leftItem < rightItem) {
        returnArray.push(leftItem);
        leftItem = left[i];
        i++;
      } else {
        returnArray.push(rightItem);
        rightItem = right[j];
        j++;
      }
    }
    return returnArray;
}

console.log(mergeSort(numbers));
let test = 0;
