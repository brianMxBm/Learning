/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
@SEE: This problem requires us to find a subsequence of string s within string t.
It doesn't have to be a contiguous subsequence, meaning that as long as all characters
of s are in t, then it is a substring otherwise it's not.

1. We know that if the length of s surpasses the length of t it's not possible to have
a subsequence within it, thus return false.

2. We use a while loop with pointers defined outside, we only move the pointer for s 
when we find a matching character in t. We always move the pointer of j since we want
to iterate to the end of it to check every character.

3. We will know if the subsequence was found if i matches the length of string s.
This is because everytime we find a matching character in the loop we increment i thus
they should match if there is a subsequence of the characters within t.


*/

var isSubsequence = function (s, t) {
  let i = 0,
    j = 0;

  if (s.length > t.length) {
    return false;
  }

  while (i < s.length && j < t.length) {
    if (s.charAt(i) === t.charAt(j)) {
      i++;
    }
    j++;
  }

  return i === s.length;
};

const testCaseS = "abc";

const testCasesT = "ahbgdc";

const result = isSubsequence(testCaseS, testCasesT);

console.log(result);
