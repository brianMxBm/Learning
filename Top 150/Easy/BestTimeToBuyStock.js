//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/**
 * @param {number[]} prices
 * @return {number}
 */

//@SEE: With this solution we get a time complexity of O(n) since in every case we hae to check the entire array.

var maxProfit = function (prices) {
  let buyPrice = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
    }
    profit = Math.max(profpassingit, prices[i] - buyPrice);
  }

  return profit;
};

//@SEE It's also possible with Kadane's Algo. Refer here: https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/

const testCase = [7, 1, 5, 3, 6, 4];

const result = maxProfit(testCase);

console.log(result);
