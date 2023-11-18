// Insert phần tử vào array.
// Tối đa 10 phần tử, sắp xếp thứ tự giảm dần

let cnt = 0;
const arr = new Array(10);

function insert(point) {
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
    console.log(arr)
  }
}

insert(15);
insert(5);
insert(1);
insert(8);
insert(10);
insert(3);
insert(4);
insert(11);
insert(1);
insert(2);
insert(9);
insert(7);
insert(6);
insert(12);
insert(16);
