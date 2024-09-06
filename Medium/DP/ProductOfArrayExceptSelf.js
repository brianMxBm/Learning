//leetcode.com/problems/product-of-array-except-self/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//@SEE: A simple bruteforce solution that covers an O(n^2) time complexity, a bit slow. Two pointer solution.

https: var productExceptSelfBruteForce = function (nums) {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1; //2,
    for (let j = 0; j < nums.length; j++) {
      if (i == j) continue; //@SEE: Don't do anything for the current i.
      console.log(product);

      product *= nums[j];
    }
    ans[i] = product;
  }
  return ans;
};

//@SEE: A O(n) solution where we utilize the idea of Dynamic Programming a bit, we notice that for both left and right products we're repeating the work being done
// thus why not use that computed result again i.e

// [1,2,3,4] -> To the left is 1 is nothing so we fill an empty space of at left = [1] and we continue with i=0 and use the left product to left[i-1] * nums[i-1] or 1 * 1 to get 1
// i = 1 left = [1, 1] nums = [1,2,3,4]
// i = 2 left = [1, 1, 2] nums = [1,2,3,4]
// We really see this solution shine when we get to i=2 in the loop which is 3 and we don't have to multiple 2*1 to get two but simple use the product in left[3] to get 6.
// We may repeat this process until we end our loop and do the same for the right products ensuring we do length-1 when initializing the array since the last position is 1 since nothing is to the right.
// We also set in the loop length -2 since we want to start to the left hand side of the initial 1 we placed from the last step

var productExceptSelfOptimizedTime = function (nums) {
  const length = nums.length;
  const ans = [];
  const left = [];
  const right = [];

  left[0] = 1;
  right[length - 1] = 1;

  for (let i = 1; i < length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < length; i++) {
    ans[i] = left[i] * right[i];
  }

  return ans;
};

const testCase = [1, 2, 3, 4];

const result = productExceptSelfBruteForce(testCase);

console.log(result);
