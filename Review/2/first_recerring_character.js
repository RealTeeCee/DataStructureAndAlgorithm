// [1,2,3,4,1,4,3,2] Output: 1

const firstRecurringCharacter = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] !== undefined) {
      console.log(arr[i]);
      return;
    }
    obj[arr[i]] = 1;
  }
  console.log(undefined);
};

firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]);
