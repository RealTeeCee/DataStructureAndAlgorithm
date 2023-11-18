/*
Write a program to print all the LEADERS in the array. An element is a leader if it is greater than all
the elements to its right side. And the rightmost element is always a leader.

Input: arr[] = {16, 17, 4, 3, 5, 2}, 
Output: 17, 5, 2

Input: arr[] = {1, 2, 3, 4, 5, 2}, 
Output: 5, 2

Input: arr[] = {1, 2, 13, 3, 2, 5, 2}, 
Output: 5, 2

*/

const findLead = (arr = []) => {
  let newArr = [];
  let i = arr.length - 1;
  let max = arr[i];
  newArr.push(arr[i]);
  while (i >= 0) {
    if (arr[i - 1] > max) {
      max = arr[i - 1];
      newArr.push(max);
    }
    i--;
  }
  console.log(newArr);
};

findLead([1, 2, 13, 3, 2, 5, 2]);
findLead([16, 17, 4, 3, 5, 2]);
findLead([1, 2, 3, 4, 5, 2]);

