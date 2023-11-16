// function nonRepeatLongestSubstring(str = "") {
//   let obj = {};
//   let obj2 = {};
//   let arr = [];
//   let substr = "";
//   let temp = 0;
//   let cnt = 0;
//   let i = 0;
//   for (i = 0; i < str.length; i++) {
//     if (obj[str[i]] === str[i]) {
//       substr = str.substring(temp, i);

//       if (substr !== "" && substr !== str[i]) {
//         temp = obj2[str[i]];
//         obj2[str[i]] = i;
//         i = temp;
//         arr.push(substr);
//         continue;
//       }
//     }
//     if (i === str.length - 1) {
//       let remain = str.substring(temp, i + 1);
//       arr.push(remain);
//     }
//     obj2[str[i]] = i;
//     obj[str[i]] = str[i];
//   }

//   let returnStr = "";
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j].length > returnStr.length) {
//       returnStr = arr[j];
//     }
//   }

//   return returnStr;
// }
// let obj = {
//     p: 0,
//     w: 1,
// }
var lengthOfLongestSubstring = function(s) {
    let obj = {};
    let arr = [];
    let temp = "";
    let k = 0;
    for (let i = 0; i < s.length; i++) {
      if (obj[s[i]] === undefined && i !== s.length - 1) {
        obj[s[i]] = i;
      } else {
        if (i === s.length - 1 && obj[s[i]] === undefined) {
          i++;
        }
        temp = str.substring(k, i);
        arr.push(temp);
        i = obj[str[i]];
        k = i + 1;
        obj = {};
      }
    }
  
    let returnStr = "";
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].length > returnStr.length) {
        returnStr = arr[j];
      }
    }
    return returnStr.length;
};

function nonRepeatLongestSubstring(str = "") {
  let obj = {};
  let arr = [];
  let temp = "";
  let k = 0;
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined && i !== str.length - 1) {
      obj[str[i]] = i;
    } else {
      if (i === str.length - 1 && obj[str[i]] === undefined) {
        i++;
      }
      temp = str.substring(k, i);
      arr.push(temp);
      i = obj[str[i]];
      k = i + 1;
      obj = {};
    }
  }

  let returnStr = "";
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length > returnStr.length) {
      returnStr = arr[j];
    }
  }
  return returnStr;
}

console.log(nonRepeatLongestSubstring("pwwksqwwwwwckew"));
console.log(nonRepeatLongestSubstring("pwwksqererrwwwwwckew"));
console.log(nonRepeatLongestSubstring("pwwp"));
console.log(nonRepeatLongestSubstring("abcabcbb"));
console.log(nonRepeatLongestSubstring("aaabcdddabdcbb"));
console.log(nonRepeatLongestSubstring("pwwkew"));
console.log(nonRepeatLongestSubstring("abcd"));
console.log(nonRepeatLongestSubstring("abb"));
console.log(nonRepeatLongestSubstring("aabb"));
console.log(nonRepeatLongestSubstring("aaaa"));
console.log(nonRepeatLongestSubstring("wwppe"));
console.log(nonRepeatLongestSubstring("pwwksqwckeen"));
console.log(nonRepeatLongestSubstring("pwwksqwcen"));
console.log(nonRepeatLongestSubstring("nonRepeatLongestSubstring"));



// wksq
// wksqer
// pw
// abc
// abcd
// wke
// abcd
// ab
// wp
// sqwcke
// ksqwcen
