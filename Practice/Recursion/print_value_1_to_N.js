const print = (n) => {
  if (n > 0) {
    print(n - 1);
    console.log(n);
  }
};

const printDsc = (n) => {
  if (n > 0) {
    console.log(n);
    printDsc(n - 1);
  }
};

printDsc(5);
