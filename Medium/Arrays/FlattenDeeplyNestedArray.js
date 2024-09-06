//https://leetcode.com/problems/flatten-deeply-nested-array/

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

//@SEE: Good O(n) solution, requires knowledge of recursion, knowing that array's are objects (could have also used Array.isArray()).

var flat = function (arr, n) {
  let res = [];

  function helper(arr, depth) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "object" && depth < n) {
        helper(arr[i], depth + 1);
      } else {
        res.push(arr[i]);
      }
    }
    return res;
  }

  return helper(arr, 0);
};

const testCase1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const depth1 = 0;

const testCase2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];

const depth2 = 1;

const result = flat(testCase1, 2); //@SEE: Printing the result is a bit odd since it'll just print Array
