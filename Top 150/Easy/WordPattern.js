/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

//@SEE: First intent. This doesn't work and isn't readable at all.
var wordPatternBrute = function (pattern, s) {
  const patternMap = new Map();
  const stringIterable = s.split(" ");

  if (stringIterable.length !== pattern.length) {
    return false;
  }

  for (let i = 0; i < stringIterable.length; i++) {
    if (patternMap.has(pattern.charAt(i))) {
      if (patternMap.get(pattern.charAt(i)) !== stringIterable[i]) {
        return false;
      }
    } else {
      if ([...patternMap.values()].includes(stringIterable[i])) {
        return false;
      } else {
        patternMap.set(pattern.charAt(i), stringIterable[i]);
      }
    }
  }
  return true;
};

var wordPatternSet = function (pattern, s) {
  const patternMap = new Map();
  const usedWords = new Set(); //@SEE: Set's cannot have dupes
  const words = s.split(" ");

  if (words.length !== pattern.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    if (patternMap.has(pattern.charAt(i))) {
      if (patternMap.get(pattern.charAt(i)) !== words[i]) {
        return false;
      }
    } else {
      if (usedWords.has(words[i])) return false;
      patternMap.set(pattern.charAt(i), words[i]);
      usedWords.add(words[i]);
    }
  }
  return true;
};

const testCasePattern = "aaaa";
const testCaseString = "dog dog dog dog";

const result = wordPatternSet(testCasePattern, testCaseString);

console.warn(result);
