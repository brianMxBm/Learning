/**
 * @param {number} n
 * @return {number}
 */

/*
Utilize an iterative approach first. O(n) solution.
*/

var iterativeFib = function (n) {
  const fibArray = [0, 1]; // Base case

  //Iterate up to the nth number. Starting at index 2 due to our base case
  for (let i = 2; i < n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2]; //Use fibonacci formula
  }

  return fibArray[n];
};

/*

Utilize a recursive approach, this will do repeat work for some calculations 
slowing it down a bit  but since n is between 0 and 30 (inclusive) it's fine. O(2^n)
*/

var recursiveFib = function (n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};
