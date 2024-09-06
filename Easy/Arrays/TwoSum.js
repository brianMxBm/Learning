//https://leetcode.com/problems/two-sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//@SEE This runs at O(n^2) time complexity due to at worst case having to read through the entire array twice. Simple two pointer solution.

var bruteTwoSum = function (nums, target) {
  for (let i = 0; i < nums.target; i++) {
    for (let x = i + 1; i < nums.target; x++) {
      if (nums[i] + nums[x] === target) {
        return [i, x];
      }
    }
  }
  return null; //@SEE: Problem states there will always be a solution.
};

//@SEE This runs at O(n) time complexity since at worst case we only ever have to check the array once utilzing the complemen & leveraging obj prototypes.

var betterTwoSum = function (nums, target) {
  const numberObj = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numberObj.hasOwnProperty(targetPair)) {
      return [i, numberObj[complement]];
    }

    numberObj[nums[i]] = i;
  }
  return null; //@SEE: Problem states there will always be a solution.
};

const testCase = [2, 3, 4, 5, 6];

const target = 5;

const result = twoSum(testCase, target);

console.warn(result);
