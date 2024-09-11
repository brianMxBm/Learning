//https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */

//@SEE It's possible with Kadane's Algo. Refer here: https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/

//@SEE: This is the correct choice because throughout the problem we want to maintain track of two things. The current sum and the result.

var maxSubArray = function (nums) {
  let maxSum = nums[0]; // This will store the maximum subarray sum found so far
  let currentSum = 0; // This keeps track of the sum of the current subarray

  for (let i = 0; i < nums.length; i++) {
    // If the current subarray sum becomes negative, reset it to 0
    if (currentSum < 0) {
      currentSum = 0;

      currentSum += nums[i]; // Add the current element to the current subarray sum

      // Update maxSum to hold the maximum sum found so far
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum; // Return the maximum subarray sum
};
