/*
Input: str = “geeksforgeeks”, c = ‘e’ 
Output: gksforgks
Input: str = “geeksforgeeks”, c = ‘g’ 
Output: eeksforeeks
*/


const removeCharArr = (str = "", char = "") => {
  let newStr = "";
  let i = 0;
  while (i < str.length) {
    if (str[i] !== char) newStr += str[i];
    i++;
  }
  return newStr;
};

const removeChar = (str = "", char = "", first) => {
  if (first === str.length - 1) return str[first] === char ? "" : str[first];
  if (str[first] !== char) {
    return str[first] + removeChar(str, char, first + 1);
  } else {
    return removeChar(str, char, first + 1);
  }
};

console.log(removeChar("geeksforgeeks", "g", 0));
