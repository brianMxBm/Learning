//https://leetcode.com/problems/reverse-words-in-a-string/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const word = s.split(" ").filter((item) => item !== ""); // Corrected arrow function syntax

  let i = 0;
  let j = word.length - 1;

  while (i < j) {
    let tempCharI = word[i];
    let tempCharJ = word[j];

    word[i] = tempCharJ;
    word[j] = tempCharI;

    i++;
    j--;
  }

  return word.join(" ").toString();
};

const testCase = "Hey this is";

const result = reverseWords(testCase);

console.log(result);
