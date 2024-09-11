// https://leetcode.com/problems/count-good-triplets/description/

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */

//@SEE: O(n^3) solution because we have to run through the array three times. This simply just keeps track of three pairs of elements in the array and check the cases. Simple.
var countGoodTripletsBrute = function (arr, a, b, c) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          count++;
        }
      }
    }
  }
  return count;
};

const testCase = [3, 0, 1, 1, 9, 7];

const result = countGoodTripletsBrute(testCase, 7, 2, 3);

console.log(result);
