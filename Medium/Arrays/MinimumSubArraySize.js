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
