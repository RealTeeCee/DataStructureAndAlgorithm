const reverseArray = (arr = []) => {
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[arr.length-i-1]] = [arr[arr.length-i-1], arr[i]];
  }
  return arr;
};

const reverseString = (str = "") => {
  let str2 = ""
  for (let i = str.length-1; i >=0; i--) {
    str2 += str[i]
  }
  return str2;
};

console.log(reverseArray([1, 2, 3, 4, 5, 6]));
// console.log(reverseString("abcde"));
