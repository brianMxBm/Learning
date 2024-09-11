//leetcode.com/problems/valid-palindrome/description/

/**
 * @param {string} s
 * @return {boolean}
 */

/*@SEE: Simple O(n) solution utilizing an array that's acting as a Stack. When you encounter an opening parenthesis, bracket, etc. push it into the stack, 
when you have a closing one if it isn't equal to it's respecting closing character return false, keep iterating until stack is empty.
*/

https: var isValid = function (s) {
  let validStack = [];
  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      validStack.push(char);
    } else {
      if (
        !validStack.length ||
        (char === ")" && validStack[validStack.length - 1] !== "(") ||
        (char === "}" && validStack[validStack.length - 1] !== "{") ||
        (char === "]" && validStack[validStack.length - 1] !== "[")
      ) {
        return false;
      }
      validStack.pop();
    }
  }
  return !validStack.length;
};

const testCase = "()";

const result = isValid(testCase);

console.log(result);
