//https://leetcode.com/problems/minimum-size-subarray-sum/description/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

/*
@SEE: In this solution we find the smallest possible window for the target value, this is done by calculating starting and ending values for the window and determining 
the best way to find a smaller sized window once our sum is greater than or equal to the given target. Then all we do is get the smaller window size, slide our window by removing
the value from the start and increasing our windowStart shifting our window.

O(n) solution.
*/

var minSubArrayLen = function (target, nums) {
  let windowSize = Infinity;
  let windowStart = 0;
  let currentSum = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    currentSum += nums[windowEnd];

    while (currentSum >= target) {
      windowSize = Math.min(windowSize, windowEnd - windowStart + 1);
      currentSum = currentSum - nums[windowStart];
      windowStart++;
    }
  }
  return windowSize === Infinity ? 0 : windowSize;
};

(target = 11), (testCase = [1, 1, 1, 1, 1, 1, 1, 1]);

const result = minSubArrayLen(target, testCase);

console.warn(result);
