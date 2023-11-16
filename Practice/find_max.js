const findMax = (arr = []) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    max = arr[i] > max ? arr[i] : max;
  }
  console.log(max);
};

findMax([3, 2, 3, 6, 7]);
