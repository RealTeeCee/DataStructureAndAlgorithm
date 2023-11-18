const reverse = (str = "", first) => {
  if (first === str.length - 1) return str[first];
  else {
    return reverse(str, first + 1) + str[first];
  }
};
console.log(reverse("abcde", 0));
let test = "";
