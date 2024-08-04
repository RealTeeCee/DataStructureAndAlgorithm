/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of 
the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/
// Input: nums = [0,1,0,3,12]   Output: [1,3,12,0,0]
// function moveZeroes2(arr = []) {
//   if (arr.length === 1) return arr[0];
//   let cnt = 0;
//   let newArr = [];
//   let j = arr.length - 1;
//   for (let i = 0; i < arr.length - cnt; i++) {
//     if (arr[i] === 0) {
//       if (arr[j] === 0) j--;
//       else {
//         newArr.push(arr[j]);
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         arr[i] = -1;
//         cnt++;
//         j--;
//       }
//     }
//   }
//   for (let k = arr.length - cnt - 1; k >=  0; k--) {
//     if (arr[k] !== -1) {
//       newArr.push(arr[k]);
//       arr[k] = -1;
//     }
//   }

//   for (let m = 0; m <=  arr.length - cnt ; m++) {
//     if (arr[m] === -1) {
//       arr[m] = newArr.pop();
//     }
//   }
//   return arr;
// }

// function moveZeroes(arr = []) {
//   if (arr.length === 1) return arr[0];
//   if (arr.every((e) => e !== 0)) return arr;

//   let j = arr.length - 1;
//   let i = 0;
//   let newArr = [];
//   let z = 0;
//   while (i <= Math.ceil(arr.length / 2) && i !== j) {
//     if (arr[i] === 0) {
//       if (arr[j] === 0) {
//         j--;
//       } else {
//         newArr.push(arr[j]);
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         arr[i] = -1;
//         z = i;
//         i++;
//       }
//     } else {
//       if (arr[j] === 0) {
//         j--;
//       } else {
//         [arr[z], arr[i]] = [arr[i], arr[z]];
//         i++;
//       }
//     }
//   }
//   for (let k = 0; k <= Math.ceil(arr.length / 2); k++) {
//     arr[k] = arr[k] == -1 ? newArr.pop() : arr[k];
//   }
//   return arr;
// }

function moveZeroes(arr = []) {
    let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[count++] = arr[i];
    }
  }

  while (count < arr.length) {
    arr[count++] = 0;
  }
  return arr;
}

console.log(moveZeroes([1, 0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 1, 0, 0, 3, 0, 12]));
console.log(moveZeroes([1, 1, 1, 1, 3, 1, 12]));
console.log(moveZeroes([1, 1, 1, 1, 3, 1, 0, 12]));

// console.log(moveZeroes2([1, 0, 1, 0, 3, 12]));
// console.log(moveZeroes2([0, 1, 0, 3, 12]));
// console.log(moveZeroes2([0, 1, 0, 0, 3, 0, 12]));
// console.log(moveZeroes2([1, 1, 1, 1, 3, 1, 12]));
// console.log(moveZeroes2([1, 1, 1, 1, 3, 1, 0, 12]));
let test = 0;
