/**
 * @param {string} s
 * @return {number}
 */

/*@SEE: Just use trim and start at the end of the word. Stop iterating when we find a empty string or when our index is negative
We don't care about the actual word but it's length so use a basic counter.

Runtime Complexity: O(n) worst case for a single letter word.
Spacetime Complexity: O(n)

*/

var lengthOfLastWord = function (s) {
  let wordLength = 0;
  let newString = s.trim();
  let i = newString.length - 1;

  while (i >= 0 && newString.charAt(i) !== " ") {
    wordLength++;
    i--;
  }

  return wordLength;
};

const testCase = "a";
const result = lengthOfLastWord(testCase);

console.log(result);
