//https://leetcode.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */

//@SEE: Simple O(n^2) solution with two pointers, return true if we see any duplicates, false if we traverse everything. Only works for small sets, NOT A VIABLE SOLUTION.
var containsDuplicateBruteForce = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        return true;
      }
    }
  }
  return false;
};

//@SEE Simple O(n) solution utilizing a set (set cannot have duplicates), false if we traverse everything.

var containsDuplicateSet = function (nums) {
  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (numSet.has(nums[i])) {
      return true;
    } else {
      numSet.add(nums[i]);
    }
  }
  return false;
};

//@SEE: Another cool O(n) solution utilizing a set using the length.
var containsDuplicateSetClever = function (nums) {
  const numSet = new Set(nums);

  return numSet.size < nums.length;
};

//@SEE An interesting O(log(n)) solution, since sorting the array (merge-sort) puts all duplicates next to one another, we can run a single loop that only runs to a certain point in the array.
var containsDuplicateSort = function (nums) {
  nums.sort((a, b) => a - b); //@SEE: Memorize this, it's how you sort number in ascending order.

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      //@SEE: Check if the number to the left of current is the same.
      return true;
    }
  }
  return false;
};

const testCase = [1, 2, 3, 4, 1];

const result = containsDuplicateSetClever(testCase);

console.log(result);
