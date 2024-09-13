/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Quite a tricky problem. We utilize a O(n) approach, the issue arises due to negative numbers as negative numbers multiplied by another can yeild a large
positive product. 

currentMax keeps track of the maximum product of the subarray ending at the current index.

currentMin keeps track of the minimum product of the subarray ending at the current index (important for handling negative numbers).

result tracks the largest product found during the iteration.

We handle the effect of negative numbers by swapping currentMax and currentMin when a negative number is encountered.
*/

var maxProduct = function (nums) {
  if (nums.length === 0) return 0;

  let currentMax = nums[0];
  let currentMin = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [currentMax, currentMin] = [currentMin, currentMax];
    }

    currentMax = Math.max(nums[i], currentMax * nums[i]);
    currentMin = Math.min(nums[i], currentMin * nums[i]);

    result = Math.max(result, currentMax);
  }

  return result;
};

const testCase = [-2, 0, -1];

const result = maxProduct(testCase);

console.log(result);
