/**
 * @param {number} n
 * @return {number}
 */

/*

@SEE: In this problem we have to find out how many ways to climb the steps.

If n = 2 

There are two ways to climb the steps:

1. Taking 1 step and 1 step. We get to 2 steps.

OR

2. We take 2 steps. 

If we imagine this as a decision tree, our base case wuld be starting at the zero step. 

We then have to make the decision of either taking one step or two, seeing the result.

If we do this we notice that we do repeated work. 

For instance if n = 3

We can go from 0 -> 1 -> 1 -> 1 which works but we can also do 0 -> 2 -> 1 as well as 0 -> 1 -> 2

We see though that when we do 0 -> 1 -> 1 we are at 2 and then we do 2 -> 1 but that's work that is going to be done again at
0 -> 2 -> 1 and in that case we can instead not to a decision tree but use DP                                            
*/

var climbStairs = function (n) {
  let one = 1;
  let two = 1;

  for (let i = 0; i < n - 1; i++) {
    temp = one;
    one = one + two;
    two = temp;
  }
  return one;
};

const testCase = 4;

const result = climbStairs(testCase);

console.log(result);
