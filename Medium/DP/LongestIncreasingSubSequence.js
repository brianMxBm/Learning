/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let sequenceArray = new Array(nums.length).fill(1); //@SEE: We do this because the shortest subsequence for all elements is one.

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        sequenceArray[i] = Math.max(sequenceArray[i], sequenceArray[j] + 1);
      }
    }
  }
  return Math.max(...sequenceArray);
};

const testCase = [1, 2, 4, 3];

const result = lengthOfLIS(testCase);

console.log(result);
