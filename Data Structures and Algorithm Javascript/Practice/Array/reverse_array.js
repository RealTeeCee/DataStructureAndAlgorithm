const reverseArray = (arr = []) => {
  let j = arr.length - 1;
  for (let i = 0; i !== j; i++) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j--;
  }
  console.log(arr);
};

reverseArray([1, 2, 3, 4, 5]);
