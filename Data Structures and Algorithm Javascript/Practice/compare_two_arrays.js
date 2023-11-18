/*
Input: arr1[] = {1, 2, 5, 4, 0}, arr2[] = {2, 4, 5, 0, 1}
Output: Yes


Input: arr1[] = {1, 2, 5, 4, 0, 2, 1}, arr2[] = {2, 4, 5, 0, 1, 1, 2} 
Output: Yes

 Input: arr1[] = {1, 7, 1}, arr2[] = {7, 7, 1}
Output: No

Given two arrays, arr1 and arr2 of equal length N, the task is to find if the given arrays
are equal or not. Two arrays are said to be equal if:
both of them contain the same set of elements, 
arrangements (or permutations) of elements might/might not be same.
If there are repetitions, then counts of repeated elements must also be the same for
two arrays to be equal.
*/

const compareTwoArray = (arr1 = [], arr2 = []) => {
  if (arr1.length !== arr2.length) return false;
  let obj1 = {};
  let obj2 = {};
  let cnt1 = {};
  let cnt2 = {};
  let cnt = 0;
  let check = false;
  for (let i = 0; i < arr1.length; i++) {
    if (check && cnt1[arr1[i]] === cnt2[arr1[i]]) {
      cnt++;
    } else {
      if (!check) {
        if (obj1[arr1[i]] || obj2[arr2[i]]) {
          if (obj1[arr1[i]] && !obj2[arr2[i]]) {
            obj2[arr2[i]] = 1;
            cnt1[arr1[i]]++;
            cnt2[arr2[i]] = cnt2[arr2[i]] > 1 ? cnt2[arr2[i]] : 1;
          } else if (obj2[arr2[i]] && !obj1[arr1[i]]) {
            obj1[arr1[i]] = 1;
            cnt1[arr1[i]] = cnt1[arr1[i]] > 1 ? cnt1[arr1[i]] : 1;
            cnt2[arr2[i]]++;
          } else if (obj2[arr2[i]] && obj1[arr1[i]]) {
            cnt1[arr1[i]]++;
            cnt2[arr2[i]]++;
          }
        } else {
          obj1[arr1[i]] = 1;
          obj2[arr2[i]] = 1;
          cnt1[arr1[i]] = 1;
          cnt2[arr2[i]] = 1;
        }
        if (i === arr1.length - 1) {
          check = true;
          i = -1;
          continue;
        }
      } else {
        console.log(false);
        return;
      }
    }
  }
  console.log(arr1.length === cnt ? true : false);
};

// Không for
const compareTwoArrayV2 = (arr1 = [], arr2 = []) => {
  console.log(
    JSON.stringify(arr1.sort((a, b) => a - b)) ===
      JSON.stringify(arr2.sort((a, b) => a - b))
  );
};

const compareTwoArrayV3 = (arr1 = [], arr2 = []) => {
  let obj = {};
  if (arr1.length !== arr2.length) return false;
  for (const ele of arr1) {
    if (obj["a" + ele]) obj["a" + ele]++;
    else obj["a" + ele] = 1;
  }
  for (const ele of arr2) {
    if (obj["b" + ele]) obj["b" + ele]++;
    else obj["b" + ele] = 1;
  }
  for (const ele of arr1) {
    if (obj["a" + ele] !== obj["b" + ele]) return false;
  }
  return true;
};
const compareTwoArrayV4 = (arr1 = [], arr2 = []) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let obj = {};
  for (const i of arr1) {
    obj[i] = (obj[i] || 0) + 1;
  }
  for (const i of arr2) {
    if (obj[i]) {
      obj[i]--;
      if (obj[i] === 0) {
        delete obj[i];
      }
    }
  }
  if (Object.keys(obj).length > 0) {
    return false;
  }
  return true;
};
console.log(compareTwoArrayV4([1, 2, 3], [1, 2, 3]));
console.log(compareTwoArrayV4([1, 2, 3], [3, 2, 1]));
console.log(compareTwoArrayV4([1, 2, 2, 2, 2, 3], [1, 2, 3, 2, 3, 2]));
console.log(compareTwoArrayV4([1, 2, 3], [1, 2, 4]));
console.log(compareTwoArrayV4([1, 3, 2, 2, 2], [2, 2, 1, 2, 3]));
console.log(compareTwoArrayV4([1, 2, 5, 4, 0, 2, 1], [2, 4, 5, 0, 1, 1, 2]));
console.log(compareTwoArrayV4([1, 1, 1, 1], [1, 1, 1, 1]));
console.log(compareTwoArrayV4([1, 1, 1, 1], [2, 2, 2, 2]));
console.log(compareTwoArrayV4([1, 2, 2, 2, 2, 2], [2, 2, 2, 1, 2, 2]));
