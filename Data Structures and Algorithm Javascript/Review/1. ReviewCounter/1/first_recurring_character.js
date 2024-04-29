const arr = [2, 1, 3, 4, 5, 2, 1, 2];
// const arr = [2, 1, 3, 4, 5];

function firstRecurringCharacter(arr = []) {
  let obj = {};
  let i = 0;
  while (i < arr.length) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      return arr[i];
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter(arr));
