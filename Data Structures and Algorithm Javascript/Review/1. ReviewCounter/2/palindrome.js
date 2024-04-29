//1 --> true
//10101 --> true
//101121101 --> true
//1115111 --> true
//234 --> false
//567 --> false

const palindrome = (x) => {
  const value = x;
  if (parseInt(x / 10) === 0) {
    console.log(`${value} isPalindrome!`);
    return;
  }
  let divisor = 10;
  while (parseInt(x / divisor) > 1) {
    divisor *= 10;
  }
  while (x !== 0) {
    let lead = parseInt(x / divisor);
    let trail = x % 10;
    if (lead !== trail) {
      console.log(`${value} is not Palindrome!`);
      return;
    }
    x = parseInt((x % divisor) / 10);
    divisor /= 100;
  }
  console.log(`${value} isPalindrome!`);
};

palindrome(1);
palindrome(11);
palindrome(111);
palindrome(1111);
palindrome(121);
palindrome(1211);
palindrome(10000000000021);
palindrome(1221);
palindrome(10101);
palindrome(101121101);
palindrome(1115111);
palindrome(234);
palindrome(567);
