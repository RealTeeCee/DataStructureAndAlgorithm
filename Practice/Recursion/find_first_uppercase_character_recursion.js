/*
Given a string find its first uppercase letter
Input : geeksforgeeKs
Output : K

Input  : geekS
Output : S
*/

const findUppercaseChar = (str = "", first) => {
  if (first === str.length) return "No Uppercase Letter";
  if (str[first].toUpperCase() === str[first]) return str[first];
  else {
    return findUppercaseChar(str, first + 1);
  }
};

const findUppercaseCharV2 = (str = "", n) => {
  if (n === 0) return "No Uppercase Letter";
  if (str[n - 1].toUpperCase() === str[n - 1]) return str[n - 1];
  else {
    return findUppercaseCharV2(str, n - 1);
  }
};

const findUppercaseCharV3 = (str = "") => {
  if (str.length === 0) return "No Uppercase Letter";
  if (str[0].toUpperCase() === str[0]) return str[0];
  else {
    return findUppercaseCharV3(str.slice(1));
  }
};

console.log(findUppercaseChar("Geeks", 0));
