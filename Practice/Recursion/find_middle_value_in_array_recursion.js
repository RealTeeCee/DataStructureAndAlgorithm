/*
To find the mean of the elements of the array. 

Mean = (Sum of elements of the Array) /
       (Total no of elements in Array)

Sum of first N-1 elements = 
                 (Mean of N-1 elements)*(N-1)

Mean of N elements = (Sum of first N-1 elements + 
                      N-th elements) / (N)

Mean of N elements = ((Mean of N-1 elements)*(N-1) + 
                      N-1 elements) / (N)



Input : 1 2 3 4 5
Output : 3
*/

const findMean = (arr = [], start, end) => {
  if (start === end) return arr[start] / arr.length;
  else {
    return arr[start] / arr.length + findMean(arr, start + 1, end);
  }
};

/** Sum of first N-1 elements = (Mean of N-1 elements)*(N-1)

Mean of N elements = (Sum of first N-1 elements + N-th elements) / (N)

Mean of N elements = ((Mean of N-1 elements)*(N-1) + N-1 elements) / (N) */

const findMeanV2 = (arr = [], length) => {
  if (length === 1) return arr[length - 1];
  return (
    (findMeanV2(arr, length - 1) * (length - 1) + arr[length - 1]) / length
  );
};

console.log(findMeanV2([1, 2, 3, 4, 5, 6], 6));
