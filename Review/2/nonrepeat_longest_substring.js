// abcabca Output: abc

const nonrepeat_longest_substring = (str) => {
  let obj = {};
  let temp = 0;
  let length = 0;
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined && i !== str.length - 1) {
      obj[str[i]] = i;
    } else {
      if (obj[str[i]] === undefined && i === str.length - 1) i++;
      if (i - temp > length) length = i - temp;
      i = obj[str[i]];
      temp = i + 1;
      obj = {};
    }
  }
  console.log(length);
};
const nonrepeat_longest_substringv1 = (str) => {
  let obj = {};
  let cnt = 0;
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = i;
      cnt++;
    } else {
      i = obj[str[i]];
      maxLength = maxLength < cnt ? cnt : maxLength;
      cnt = 0;
      obj = {};
    }
  }
  console.log(maxLength < cnt ? cnt : maxLength);
};

nonrepeat_longest_substringv1("abcc");
nonrepeat_longest_substringv1("aabb");
nonrepeat_longest_substringv1("pwwkew");
nonrepeat_longest_substringv1("pwwksqererrwwwwwckew");
nonrepeat_longest_substringv1("pwwksqwcen");

