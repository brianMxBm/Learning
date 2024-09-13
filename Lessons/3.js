// Write a function that accepts an array of strings as an argument. The goal of this function is to maximize the amount of work to optimize the other funciton.
// Write a function that accepts a string as an argument, it will return true or false based off of if the string is in the original array.

//Ex: ["cat", "car", "bar"] => isInDict("cat") will return true.

//@SEE: First I'll do an implementation without utilizing OOP. I'll create a map from the array.

class Dictionary {
  constructor(wordArray) {
    this.dict = new Set(wordArray);
  }

  isInDictionary(word) {
    return this.dict.has(word);
  }
}

const dictionary = new Dictionary(["hey", "this", "is"]);

const result = dictionary.isInDictionary("thissss");

console.warn(result);
