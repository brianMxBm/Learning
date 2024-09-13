/**
Write a function that takes two numbers and returns
the sum of those numbers
*/
function add(num1, num2) {
  return num1 + num2;
}

console.log("add", add(2, 3)); // Expects 5

/**
  Write a function that takes any number of arguments
  of type number and returns the sum of all the arguments
  */

function sum(...args) {
  let number = 0;
  args.forEach((num) => {
    number += num;
  });
  return number;
}

console.log("sum", sum(2, 3, 4, 5)); // Expects 14

/**
  Write a function that takes two strings, A and B,
  and returns whether B is in A in a case-insensitive way
  */
function stringIncludes(word1, word2) {
  word1 = word1.toLowerCase().trim();
  word2 = word2.toLowerCase().trim();

  return word1.includes(word2);
}
console.log(
  "stringIncludes",
  stringIncludes("I drove to New York in a van with my friend", "new")
); // Expects true

/**
  Write a function that takes an array of objects, and returns an array
  of the objects' "name" property, only if that property exists
  */
function getNames(names) {
  const expectedNames = [];

  names.forEach((obj) => {
    if (obj.hasOwnProperty("name")) {
      expectedNames.push(obj.name);
    }
  });

  return expectedNames;
}

console.log(
  "getNames",
  getNames([
    { a: 1 },
    { name: "Jane" },
    {},
    { name: "Mark" },
    { name: "Sophia" },
    { b: 2 },
  ])
); // Expects ['Jane', 'Mark', 'Sophia']

/**
  Write a function that takes an array of numbers and returns the
  index of the largest number
  */
function getLargestNumberIndex(nums) {
  nums.sort((a, b) => a - b); // Sorts the array numerically
  const number = Math.max(...nums);
  const index = nums.indexOf(number);
  return index;
}

console.log("getLargestNumberIndex", getLargestNumberIndex([7, 1, 4, 12, 9])); // Expects 3

/**
  Write a function that returns a promise that resolves
  after n number of milliseconds
  */
function delay(n) {}

(async () => {
  console.time("Testing delay");
  await delay();
  console.timeEnd("Testing delay");
})();
