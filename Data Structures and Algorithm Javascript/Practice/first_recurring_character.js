const arr = [2, 1, 3, 4, 5, 2, 1, 2];
// const arr = [2, 1, 3, 4, 5];

function firstRecurringCharacter1(arr = []) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1; //1 is random value
    } else {
      return arr[i];
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter1(arr));
