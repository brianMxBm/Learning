/*

Binary search is a vital algorithm to find the position of a target value within a 
SORTED Array (this will not work on unsorted arrays). It's a divide and conquer algo that
focuses on spliting the interval in half until the target value is found or the interval is empty.
*/

// Iterative Implementation

var binarySearch = function (sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;
  let mid;
  while (right >= left) {
    mid = left + Math.floor((right - left) / 2); //@SEE: We need Integer division, or rather to round down to a whole number

    if (sortedArray[mid] == target) {
      return mid;
    }

    if (sortedArray[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1; //@SEE: If we finish searching but didn't find anything
};

const testCase = [1, 2, 3, 4, 5, 10];

const target = 1;

const result = binarySearch(testCase, target);

console.log(result);
