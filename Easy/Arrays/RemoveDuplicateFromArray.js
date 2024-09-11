//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */

//@SEE: We utilize a two pointer solution, i to traverse the array and j to keep track of the unique elements. O(n) solution since we only iterate once.

/* If we have [0,1,2,2,2,3] at the first iteration we have nums[i] = 1 and nums[j] = 0 and they're not equal so we found a unique element and we increment j making it 1 
and set nums[1] = nums[1] so 1 = 1. We pretty much only change the array when we find a new unique value.
*/

var removeDuplicatesBruteForce = function (nums) {
  if (nums.length === 0) return 0;

  let j = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      j++;

      console.log(nums[j]);
      console.log(nums[i]);
      nums[j] = nums[i];
    }
  }

  return j + 1;
};

/*@SEE: A clever solution that utilizes a set, we create a set form the array removing any duplicates, mutate the length to zero (essentially removing everything from the array)
 and mutating the array to have the items that the set has.
 */

var removeDuplicatesSet = function (nums) {
  const result = new Set(nums);
  nums.length = 0;
  nums.push(...result);
  return nums.length;
};

const testCase = [0, 1, 2, 2, 2, 3];

const result = removeDuplicatesSet(testCase);

console.warn(result);
