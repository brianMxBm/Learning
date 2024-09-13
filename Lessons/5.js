function reverseIterative(word) {
  let reversedWord = "";
  let i = word.length - 1;

  for (i; i >= 0; i--) {
    reversedWord += word[i];
  }

  return reversedWord;
}

const result = reverseIterative("hey");

console.log(result);
