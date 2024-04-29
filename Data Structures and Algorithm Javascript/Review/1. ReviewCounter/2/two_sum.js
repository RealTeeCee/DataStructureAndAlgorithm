//[1, 2, 3] target: 3 output: [0,1]
function twosum(arr, target) {
  let obj = {};
  let i = 0;
  while (i <= arr.length) {
    if (obj[target - arr[i]] !== undefined) {
      return console.log([obj[target - arr[i]], i]);
    }
    obj[arr[i]] = i;
    i++;
  }
}

twosum([1, 3, 2], 3);

console.log(0 === undefined);
