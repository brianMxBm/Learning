# Closures?

Closures in Javascript is a concept that revolves around the notion of functions retaining access to variables from their parent scope, even after the parent function has finishe execution.

A closure utilizes references to it's lexical enviornment (surrounding state), they are created every time a function is created.

Closures are useful because they allow us to create maintain variable state in lexical enviornments, enhancing the notions of private variables and functions for modularity and asynchronous operations that can help preserve the state of variables.

Take for instance:

```
function appCounter() {
  let count = 0;

  return function() {
    return ++count;
  };
}

const counter = appCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
```

In this example we have a function `appCounter` that returns an anonymous function which can be invoked later as a callback function. What's important is how the count variable persists even after the execution context for appCounter gets popped off the stack after it's first output. It works due to the fact that counter has a reference to the instance of the anonymous function, that instance has a reference to it's lexical enviornment where `count` exists

Take another example:

```function createPerson(name) {
  let username = name;

  return {
    getName: function() {
      return username.toUpperCase();
    }
  };
}

const person = createPerson('John');

console.log(person.getName()); // Output: JOHN
console.log(person.username); // Output: undefined
```

We have a function `createPerson` that takes in the parameter of `name` and returns an object that has the key value pair of `getName: f(x)`

We have an object `person` and log out a few things.

Notice how we essentially made a getter from `getName` and made username a `private` variable since we abstracted it from the `person` object and is now encapsulated within the `createPerson` function
