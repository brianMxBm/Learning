# What are closures in JavaScript, and how are they used?

In Javascript all functions are technically closures, because they're created with references to their surrounding lexical enviornment. Essentially they can access variables & parameters outside of their block scope. In terms of the JS Execution Context, nested functions have access to the previous Execution's Context data (variables and parameters) and can utilize them in their own respective Execution Context. This can be useful when creating private variables, creating callback functions that can access variables from the parent scope, etc.

# Can you explain the difference between let, var, and const in JavaScript?

Before ES6 Javascript onyly had Global Scope and Functional Scope, after ES6 the
let and const keywords were introduced along with block scope which meant that variables declared with let and const inside of a block {} cannnot be accessed outside of said block.'

let allows you to declare a variable that can be mutated within the block scope.

const allows you to declare a variable that cannot be reassigned at all within the block scope.

While variables declared with const cannot be reassigned, objects and arrays declared with const can have their contents modified (their reference just can’t change). In regards to hoisting, let and const are hoisted but are not initialized during the compilation phase.

# What is the difference between synchronous and asynchronous programming in JavaScript?

Synchronous programming refers to the notion of operations executing one after the other in sequence, each line of code waits for the previous one to finish before proceeding to the other one.

Asynchronous programming on the other hand refers to the notion of having multiple tasks run concurrently and independently of each other. Javascript maintains this notion of never blocking the thread. JavaScript uses the Event Loop to manage asynchronous tasks. When JavaScript encounters an asynchronous operation, like a setTimeout, HTTP request, or a database call, it offloads these operations to Web APIs (such as the browser's timer or HTTP request system).While the asynchronous task is running in the Web API, JavaScript continues executing other synchronous code (i.e., the main thread isn't blocked). Once the asynchronous task is complete, the result (usually a callback function) is placed in the Callback Queue.The Event Loop constantly checks if the Call Stack (where synchronous code runs) is empty. When it is, the Event Loop pushes callbacks from the Callback Queue to the Call Stack, allowing the asynchronous code to run.

# What are higher-order functions in JavaScript? Can you give an example?

In Javascript higher-order functions are those that take a function as a parameter and return a function. They can be useful for encapsulating resuable patterns of logic. Some common in-built higher order functions are .map(), .filter(), and .reduce()

# What is hoisting in JavaScript, and how does it affect variable and function declarations?

In Javascript hoisting refers to the phenomenon on how functions are variables are stored during the memory allocation phase. During the compilation phase, variable and function declarations are moved to the top of their respective scopes before being executing. Memory is allocated for variables but don't get initailzed with a value until the execution phase and are initialized with undefined.

let and const are hoisted but are placed in the Temporal Dead Zone meaning they can't be accessed before the declaration is executed

function declarations and the bodies are full hoisted allowing for use before being declared.

function expressions like arrow functions or when assigned to variables are not hoisted.

# Is Javascript pass by value or pass by reference?

Javascript is primarily a 'pass by value' language, for primitive types like numbers, strings, booleans, null, undefined and symbols. Meaning that the value is copied directly, there are no references involved where changing one will affect the other, they're independent in memory.
There are certain instances were there is 'pass by reference' for objects and arrays. If you assign an object variable to another variable it won't copy the entire object but rather copies a reference, so both point to the same place in memory, where altering one will change the other

# What is the difference between deep and shallow copy in JavaScript?

A shallow copy occurs when you copy the refernece of an object to a new variable Only the top-level properties are copies while nested objects or arrays still reference the original. Shallow copies occur when using the spread operator, Object.assign(), Array.concat(), etc.

A deep copy creates a brand new object or array which includes all of the nested objects and arrays so that no references are shared between the original and the copy. Deep copies occur when using serilaztion like JSON.stringify() or third parties libs like lodash.

# What is the Spread Operator in JavaScript

ES6 introduced the spread operator (...), which allows you to "spread out" elements of an iterable (such as strings, arrays, or even objects) into individual elements or properties. This operator provides a concise and flexible way to work with iterables, making it easier to copy, merge, or extract elements.

# What is the difference between semantic and non-semantic HTML elements?

Semantic HTML utilizes tags that serve their purpose, instead of using a div tag for a header or footer we may utilize the header or footer tags respectivley which semantically make more sense and help achieve optimal SEO, better acessibility for screen-readers, etc. Non-semantic HTML can also be utilized with the div and span tags for our own custom use that don't fit with the semantic tags.

# What is the difference between null and undefined in JavaScript?

During the compilation phase of the Javascript Engine, as we discussed variables are hoisted and have the value of undefined. Undefined is indicates the absence of a value, that may or may not change. Undefined is also a primitive.

Null on the other hand is an assignment value that represents the intential absence of a value. Null is also a primitive

# What is the difference between props and state in React?

React utilizes the core concepts of props and reacts to form interactive applications, props are immutable and are passed down from parent to child components / functions. State is something that is maintained inside of a component and is mutable.

# What happens when someone presses on a weblink?

DNS resolution: The browser first checks the local DNS cache to see if it knows the IP address corresponding to the domain. If not, a DNS request is sent to a DNS server to resolve the domain to an IP address.

TCP/IP connection: Once the IP address is resolved, the browser initiates a TCP/IP connection to the server hosting the site. This includes the three-way handshake (SYN, SYN-ACK, ACK). If the connection is secure (HTTPS), a TLS handshake also occurs to establish encryption.

HTTP request: The browser sends a GET request to the server to retrieve the HTML and assets for the page. For dynamic content, the server may interact with back-end services (like databases or APIs) to generate the response.

Server response: The server responds with an HTTP status code (e.g., 200 for success, 404 for not found) and headers (such as cookies, caching instructions, and content types). The body of the response contains the HTML, CSS, and JavaScript needed to build the page.

HTML and CSS parsing: The browser parses the HTML and builds the DOM (Document Object Model). It also parses the CSS, constructing the CSSOM (CSS Object Model) to apply styles to the DOM.

JavaScript execution: The browser’s JavaScript engine parses and executes any JavaScript files or inline scripts, which might result in additional network requests or modifications to the DOM.

Rendering: Once the DOM and CSSOM are built, the browser calculates the layout of the page (reflow), applies styles, and renders it on the screen. This process includes painting the visual elements and displaying the final content to the user.

# What is the Critcal Rendering Path

The Critical Rendering Path is the sequence of steps the brwoser goes through to parse an HTTP response converting the bytes to the DOM tree. The browser will initate requests everytime there are references to external soruces like stylesheets, scripts, etc. Some requests can halt the parsing of the HTML. After the DOM and CSSOM are complete, the browser builds the render tree which has nodes of the elements. Layout will then occur defining the location and size of the tree elements and once complete the page is painted on the screen.

# What is the DOM

The Document Object Model represents HTML or XML documents as a tree data structure where elements, attributes and text are all objects / nodes. There are two key processes involved with rendering it, that being painting and reflow.

Reflow is the process where the browser calcualtes the layout of the page, determining the size, psotion and dimensions of elements relative to one another. This can occur upon render, resizing the window or viewport, changing styles and content changes.

Repainting or painting is the process of changes being made to the appearnce of the elements.

If there are any changes to the DOM it's rebuilt on the element and child elements, esentially a re-render of all of the elements. The virtual DOM builds upon this.

# What is the Virtual DOM

The Virtual Dom is an in memory representation of the Document Object Model. When React renders a component, there's in an memory representation that mirrors the actual DOM. When props or state change a new virtual dom is created. React then compares the Virtual DOM with the previous Virtual DOM. This process is called reconcilation.

# What is the box model in CSS

The box model refers to a term in CSS that means that a box is wrapped around every HTML elemenet that consists of padding, borders and margins

# What is the difference between Flex & Grid

CSS grid is a two-dimensional layout system that allows you to create complex grid-layours with rows and columns.

CSS Flex is a one dimensional layout system that allows you to only work on either row or columns at a time.

# What is the AbortController in Javascript

The Abort Controller in Javascript allows you to abort one more requests when desired.

# How do you reverse a string in Javascript

There are various ways, it's key to remember that if you're given a string it's just an array of characters

Using built-in functions.

```
function reverse (word) {
    const wordArray = word.split() //This will return a new array

    wordArray.reverse()

    wordArray.join(',')

    return wordArray.toString()
}
```

Iterating.

```
function reverseIterative(word){

    let reversedWord = ""
    let i = word.length-1

    for (i; i >= 0; i--){
        reversedWord += word[i]
    }

    return reversedWord
}
```

Using recursion:

```
function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}
```

# What's the difference between extends & implements in JavaScript

The extends keyword is used for inheriting a class and extending a type. When using extends
for class inheritance a subclass isc reated that inherits properties and methods from another class.

```
class Animal {
    makeSound(): void {
        console.log('Dog sound');
    }
}
// Derived class representing a
// specific type of animal: Dog
class Dog extends Animal {
    bark(): void {
        console.log('Dog is barking!');
    }
}
```

The implements keyword is used to ensure a class conforms to an inteferface.

In essense, extends means a new class is a child and inherits the super classes object/methods. While implements means the new class can be treated as the same shape but it's not a child.

`extends` is for inheritance

`implements` is for polymorphism

# What's the difference between a stack and a queue in JavaScript

Both are data structures that allow you to contain data.

A stack is a LIFO structure (LAST IN, FIRST OUT) meaning that the last element added is the first to be removed. It has methods like push(), pop(), peek() etc. It's useful for recursive algoritms, backtracking and the Javascript Execution Context utilizes it to maintain the function call stack.

A queue is a FIFO Structure (FIRST IN FIRST OUT) meaning that the first element added is the first to be removed. It has methods like enqueue(), dequeue(), etc. It's useful for managing lists waiting lists, and breadth first search algorithims.

# What's the difference between an Array and List in Javascript

Array's are built in objects used to store multiple elements and can hold any type of data be it primitives or objects or other arrays and are indexed by

List's aren't a bult in structure in JS.

Write code to traverse a tree in a zig zag pattern.
You are give a set of plane departures and arrivals time at hours of the day.
Write code to determine when the most planes are in the air.

In JS, complete this webstore

Linkedlist traversal
