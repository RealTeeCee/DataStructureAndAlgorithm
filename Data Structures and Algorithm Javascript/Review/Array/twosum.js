//[1,2,3,4,5],9 return [3,4]

function twosum(arr = [], target) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[target - arr[i]] != null) {
      return [i, obj[target - arr[i]]];
    }
    obj[arr[i]] = i;
  }
}

console.log(twosum([7, 3, 3, 6, 5], 9));
