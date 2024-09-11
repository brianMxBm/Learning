//https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */

//@SEE: Simple O(n) solution that utilizes two pointers that just compares the character at a specific index, if we ever reach a point where they don't match return false.

var isPalindromeBrute = function (s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase(); //@SEE: Memorize this regex

  let i = 0;
  let j = s.length - 1;

  if (s === "") {
    return true;
  }

  while (i < j) {
    if (s.charAt(i) !== s.charAt(j)) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};

const testCase = "A man, a plan, a canal: Panama";

const result = isPalindromeBrute(testCase);

console.log(result);
