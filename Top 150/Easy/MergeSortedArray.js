//https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//@SEE: The easiest way to do this problem is to simply copy over num2 into num1 and do a .sort().
var mergeWithSort = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - 1, ...nums2); //@SEE: Splice takes in (initial index to remove elements, the number of elements to delete, and the elements to insert)
  nums1.sort();
  return nums1;
};

//@SEE Another way is an iterative reverse approach. Since nums1 already has extra space we can start populating sorted elements from num2 to it.

var mergeWithIterative = function (nums1, m, nums2, n) {
  let i = m - 1; //@SEE: Size of nums1 without zero's
  let j = n - 1; //@SEE: Size of nums2
  let k = m + n - 1; //@SEE: True size of nums1

  while (j >= 0) {
    //@SEE: Keep iterating until we reach the last element
    if (i >= 0 && nums1[i] > nums2[j]) {
      //@SEE: We compare the end of array of nums1 (before the zeros) with the last value in nums[2]. Meaning if it's greater than the value in nums2
      nums1[k--] = nums1[i--];
    } else {
      //@SEE: If it's not we just update the last index of nums1 to be the last index of nums[2].
      nums1[k--] = nums2[j--];
    }
  }
};

const testCase = [1, 2, 3, 0, 0, 0];
const m = 3;
const testCase2 = [2, 5, 6];
const n = 3;

const result = mergeWithIterative(testCase, m, testCase2, n);

console.log(result);
