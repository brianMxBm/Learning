// Write a function that accepts a string as an argument. The function should capitalize ONLY every other letter in the String
// Ex: "hello" => "HeLlO", "hey brian" => "HeY bRiAn"
// The function should return the converted string.

//Edge Cases: We must first identify edge cases.
// 1: Special Characters & Spaces should be returned as normal.

//Implementation: We can utilize a simple O(n) solution in which we iterate over the characters in the array.
//Special Cases: For empty strings and special characters we don't mutate the data in place and simply leave it as such.
//Regular Case: We need to keep a counter for every continuous word to denote its even indices and reset the counter for every empty string.

function camelCaseBrute(word) {
  const letters = []; // Use an array to build the result

  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      letters.push(word[i].toUpperCase()); // Push uppercase letters
    } else {
      letters.push(word[i].toLowerCase()); // Push lowercase letters
    }
  }

  return letters.join(""); // Join the array into a string
}

const testCase = "hey       brian";
const result = camelCaseBrute(testCase);
