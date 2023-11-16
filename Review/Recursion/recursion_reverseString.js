const reverse = (str = "", start, end) => {
  if (end <= start) return str[end];
  return str[end] + reverse(str, start, end - 1);
};
const reverseV2 = (str = "", length) => {
  if (length === 0) return "";
  return str[length - 1] + reverseV2(str, length - 1);
};

const str = "abcdef";

// console.log(reverse(str, 0, 5));
console.log(reverseV2(str, str.length));
