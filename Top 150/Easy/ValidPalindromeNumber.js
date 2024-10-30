/**
 * @param {number} x
 * @return {boolean}
 */

//@SEE: One of the simplest ways to verify if this number is a palindrome is to cast the number to a string
var isPalindrome = function (x) {
  const number = x.toString();

  let i = 0;
  let j = number.length - 1;

  while (i < j) {
    if (number[i] !== number[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

const testCase = 21;

const result = isPalindrome(testCase);

console.log(result);
