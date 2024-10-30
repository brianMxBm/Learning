//https://leetcode.com/problems/roman-to-integer/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @return {number}
 */

/*@SEE: To convert a Roman Number to an Integer there are certain caveats we have to follow, specifically with instances of


V (5) -> I can be placed before V (5) and X (10) to make 4 and 9. 

X (10) -> X can be placed before L (50) and C (100) to make 40 and 90. 

C (100) -> C can be placed before D (500) and M (1000) to make 400 and 900

In these special cases we can't simply just correlate the Roman Value to integer as IV is 5 not 1 + 5 resulting in 6.

A simple solution could utilize multiple switch statements in a loop, we utilize variables outside of the loop

currentNum denotes the current value that has been added. 

prev denotes the value of the preious numeral

ans denotes the total integer value

We start from right to left due to the fact that it makes it easier to deal with the edge cases. 

The switch statement allows us to get a value from the string 

We use prev to check if we'll add or subtract to the overall answer. In the special edge cases this is important, such as IV, we don't want to add 5 + 1 
we have 5 and then since currentNum is less than prev we want to subtract, this happens for all of the special edge cases. Otherwise we just want to add.


*/
var romanToInt = function (s) {
  let currentNum = 0;
  let prev = 0;
  let ans = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    switch (s.charAt(i)) {
      case "I":
        currentNum = 1;
        break;
      case "V":
        currentNum = 5;
        break;
      case "X":
        currentNum = 10;
        break;
      case "L":
        currentNum = 50;
        break;
      case "C":
        currentNum = 100;
        break;
      case "D":
        currentNum = 500;
        break;
      case "M":
        currentNum = 1000;
        break;
    }

    if (currentNum < prev) {
      ans -= currentNum;
    } else {
      ans += currentNum;
    }

    prev = currentNum; // Update prev for the next iteration
  }

  return ans;
};

const testCase = "LVIII";

const result = romanToInt(testCase);

console.warn(result);
