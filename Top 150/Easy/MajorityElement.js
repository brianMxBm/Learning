//https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number}
 */

//@SEE: This is a pretty bad solution. Runtime complexity is O(n^2) Spacetime complexity is O(n)
var majorityElementBrute = function (nums) {
  const frequencyMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (frequencyMap.has(nums[i])) {
      let frequency = frequencyMap.get(nums[i]);
      frequencyMap.set(nums[i], frequency + 1);
    } else {
      frequencyMap.set(nums[i], 1);
    }
  }

  // Find the element with the highest frequency
  let highestFrequency = 0;
  let majorityElement = null;

  for (let [num, frequency] of frequencyMap.entries()) {
    if (frequency > highestFrequency) {
      highestFrequency = frequency;
      majorityElement = num;
    }
  }

  return majorityElement;
};

//@SEE: More efficient use of variables to avoid looping twice resulting in O(n) complexity and space complexity of O(n)

var majorityElementMap = function (nums) {
  const frequencyMap = new Map();
  let result = 0;
  let majority = 0;

  for (let i = 0; i < nums.length; i++) {
    frequencyMap.set(nums[i], (frequencyMap.get(nums[i]) || 0) + 1);
    if (frequencyMap.get(nums[i]) > majority) {
      result = nums[i];
      majority = frequencyMap.get(nums[i]);
    }
  }
  return result;
};

//@SEE: This solution involves not utilizing any external containers but just pointers denoting the majority and result iteratively

var majorityElementBest = function (nums) {
  let result = 0;
  let majority = 0;

  for (let n of nums) {
    if (majority == 0) {
      result = n;
    }

    if (n == result) {
      majority += 1;
    } else {
      majority -= 1;
    }
  }
  return result;
};

const testCase = [3, 3, 4, 2, 5, 5, 5, 5];

const result = majorityElementBest(testCase);

console.log(result);
