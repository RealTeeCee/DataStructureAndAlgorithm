const length = (str = "") => {
  if (str === "") return 0;
  else {
    return length(str.slice(1)) + 1;
  }
};

let str = "Nguyen";
console.log(length(str));
