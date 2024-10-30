/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//@SEE: Since we need to find the first occurrence of a word, we can simple use the indexOf method.
var strStrSimple = function (haystack, needle) {
  return haystack.indexOf(needle);
};

/*@SEE We only care about a specific interval, that being the length of the needle, 
thus we don't care of the haystack length is less than the needle, meaning that it's impossible
for the needle to be apart of the haystack

Then we iterate through the haystack, checking if the substring from the current iterator to the length of the 
needle matches the needle. If so we found the exact needle in the haystack! 


Runtime Complexity: O(n * m) due to checking every possible substring in the worst case 

Spacetime Complexity: O(m) where m is the length of the needlt due to the temporary substring created when iterating 

*/

var strStrWindow = function (haystack, needle) {
  if (haystack.length < needle.length) {
    return -1;
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};

const testHaystack = "a";
const needle = "a";

const result = strStrWindow(testHaystack, needle);

console.log(result);
