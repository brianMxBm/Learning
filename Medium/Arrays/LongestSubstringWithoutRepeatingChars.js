//https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */

/* @SEE: There's a very distinct pattern utilizing the sliding window algo we always have a start and end that gets recomptued
and we utilize Max or Min depending on what the question asks, in this case the longest substring so Max. We use a set to avoid dupes
and use a while loop to alter our window and remove the start of the window in the set while incrementing windowStart.
We then in every iteration need to add the current letter, we then compute the windowSize.

O(n) solution
*/

var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let windowStart = 0;
  let windowSize = 0;

  for (windowEnd = 0; windowEnd < s.length; windowEnd++) {
    while (set.has(s[windowEnd])) {
      set.delete(s[windowStart]);
      windowStart++;
    }

    set.add(s[windowEnd]);

    windowSize = Math.max(windowSize, windowEnd - windowStart + 1);
  }

  return windowSize;
};
const testCase = "abcabcbb";

const result = lengthOfLongestSubstring(testCase);

console.log(result);
