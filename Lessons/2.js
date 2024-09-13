// Write a function that accepts a string as an argument, the string is meant to be HTMl, but all of the div elements are missing their closing tags.
// The function should find and close all of the dics in the provided HTML string.
// The function should return the entire collected string.

// Ex: Input: "<div>Hello</div>" ->  Output: "<div>Hello</div>" if no closing tags missing return original string.
// Ex: Input: "<div>Hello" -> Output: <div>Hello</div>
// The function should return the string with closed tags.

//Edge Cases: We must first identify edge cases.
// 1: Original String returned if we're not missing any closing tags.
// 2: If we're missing a tag we have to add it in place to where it should be.
// 3: For nested tags <p>fjff<div>sfs we must return <p>fjff<div>sfs</div></p> etc.

/*@SEE: This is eerily similair to the String palindrome question, because every opening tag must have a respective closing tag, we need to keep track of 
every opening tag and ensure there's a closing tag, if not we need to add it. Since strings aren't mutable we'll need to make a new string or better yet an array 
to contain everything.
*/

function verifyTags(html) {
  const htmlTags = [];

  for (let i = 0; i < html.length; i++) {
    if (html[i] == "<") {
    }
  }
}
