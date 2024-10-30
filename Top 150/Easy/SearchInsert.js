//https://leetcode.com/problems/search-insert-position/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((high - low) / 2);

    if (nums[mid] == target) {
      return mid;
    }

    if (target < nums[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

const testCase = [1, 3, 5, 6];

const target = 3;

const result = searchInsert(testCase, target);

console.log(result);
