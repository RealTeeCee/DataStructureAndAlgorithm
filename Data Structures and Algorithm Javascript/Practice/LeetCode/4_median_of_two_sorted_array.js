/**
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
 */

/** TC O(m+n)
var mergeTwoSortedArrays = function (arr1 = [], arr2 = []) {
  let returnArr = [];
  let i = 0;
  let j = 0;

  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  while (arr1[i] !== undefined || arr2[j] !== undefined ) {
    if (arr1[i] >= arr2[j] || arr1[i] === undefined) {
      returnArr.push(arr2[j]);
      j++;
    } else if (arr2[j] >= arr1[i] || arr2[j] === undefined) {
      returnArr.push(arr1[i]);
      i++;
    }
  }
  return returnArr;
};

var findMedianSortedArrays = function (nums1 = [], nums2 = []) {
  var newArr = mergeTwoSortedArrays(nums1, nums2);
  if(newArr.length === 0) return;
  
  var medianVal = Math.floor(newArr.length / 2)
  if (newArr.length % 2 === 1) {
    return newArr[medianVal];
  } else {
    return (newArr[medianVal] + newArr[medianVal - 1]) / 2
  }
};
 */
/** Use Js Built-in
var findMedianSortedArrays = function(nums1, nums2) {
    
    let arr = [...nums1, ...nums2].sort((a,b) => a - b);
    let mid = Math.floor(arr.length / 2);

    return arr.length % 2 === 1 ? 
        arr[mid] : 
        (arr[mid] + arr[mid - 1]) / 2
};
*/
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length){
        [nums1,nums2] = [nums2,nums1];
    }

    nums1.unshift(-Number.MAX_VALUE);
    nums2.unshift(-Number.MAX_VALUE);
    nums1.push(Number.MAX_VALUE);
    nums2.push(Number.MAX_VALUE);

    let p1 = Math.ceil((nums1.length+nums2.length)/2)
    let l = 0;
    let r = nums1.length-1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);

        let mid2 = p1 - mid - 2;
        if(nums1[mid]<=nums2[mid2+1] && nums1[mid+1]>=nums2[mid2]){
            if((nums1.length + nums2.length) %2 ===0){
                return (Math.min(nums1[mid+1],nums2[mid2+1])+Math.max(nums1[mid],nums2[mid2]))/2
            } else {
                return Math.max(nums1[mid],nums2[mid2]);
            }
        } else if(nums1[mid+1]<nums2[mid2]){
            l = mid+1;
        } else {
            r = mid-1;
        }

    }
}

var a = [1, 2, 5];
var b = [3, 4];
console.log(findMedianSortedArrays(a, b));
