//https://leetcode.com/problems/valid-anagram/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//@SEE: This brute force solution takes advantage of JS's sort and array methods. If both arrays aren't identical they can't be anagrams.
var isAnagramBrute = function (s, t) {
  if (s.length !== t.length) return false;

  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  return sortedS == sortedT;
};

/*@SEE: "Throw a hashmap at it lol", we get an efficient solution that allows us to utilize a map with a counter as the value and the key
being the actual letter. When we check the key when iterating on the t, we check if it exists in the map as a value, if it doesn't then we 
know it's not an anagram, or if the value is 0 that means there's an extra letter in T thus impossible to be an anagram. Otherwise we found it
and decrement value in map. 


Runtime Complexity: O(2n) -> O(n) due to iterating on the entirety of string S and T.
Spacetime Complexity: O(n) due to iterating n characters in the string s and t

*/
var isAnagramMap = function (s, t) {
  const charMap = new Map();

  if (s.length !== t.length) return false;

  for (let char of s) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!charMap.has(char) || charMap.get(char) === 0) {
      return false;
    }
    charMap.set(char, charMap.get(char) - 1);
  }
  return true;
};

const testCaseS = "aacc";
const testCaseT = "ccac";

const result = isAnagramMap(testCaseS, testCaseT);

console.log(result);
