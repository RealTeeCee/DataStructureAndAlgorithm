// Insert and sort to an array with max length = 10, order by descending

// 5 4 1 <-- 2

let array = new Array(10);
let cnt = 0;
const insertAndSort = (arr, point) => {
  if (cnt < arr.length || arr[cnt - 1] < point) {
    if (cnt < arr.length) {
      cnt++;
    }
    let i = cnt - 1;
    while (i > 0 && arr[i - 1] < point) {
      arr[i] = arr[i - 1];
      i--;
    }
    arr[i] = point;
  }
  let test = "";
  console.log(arr);
};

insertAndSort(array, 1);
insertAndSort(array, 8);
insertAndSort(array, 2);
insertAndSort(array, 9);
insertAndSort(array, 3);
insertAndSort(array, 10);
insertAndSort(array, 4);
insertAndSort(array, 5);
insertAndSort(array, 6);
insertAndSort(array, 7);
insertAndSort(array, 10);
