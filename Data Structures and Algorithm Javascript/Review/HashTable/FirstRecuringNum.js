/*
[2,5,1,2,3,5,1,2,4] return 2
[2,1,1,2,3,5,1,2,4] return 1
[2,4,3,5] return undefined
*/

function firstRecurringNum(arr = []) {
  let obj = {};
  let i = 0;

  while (i < arr.length) {
    if (obj[arr[i]] !== undefined) {
      return arr[i];
    } else {
      obj[arr[i]] = 1;
    }
    i++;
  }
}

console.log(firstRecurringNum([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringNum([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringNum([2, 3, 4, 5, 6, 7, 8, 8]));
console.log(firstRecurringNum([2, 1, 3, 4, 5, 6, 7, 1]));
console.log(firstRecurringNum([2, 1, 3, 4, 4]));
console.log(firstRecurringNum([2, 2]));
console.log(firstRecurringNum([2, 4, 3, 5]));
