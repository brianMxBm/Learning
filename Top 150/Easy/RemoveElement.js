//https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/*@SEE: We essentially need to remove elements in place and return the size of the mutated array after "removing" the requested value

We don't have to actually remove the value but rather move it to the end of the nums array. 

We need to keep track of the ind

*/

var removeElement = function (nums, val) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};

const testCase = [3, 2, 2, 3];

const testValue = 3;

const result = removeElement(testCase, testValue);

console.log(result);
