# bind() apply() and call()?

In JavaScript we are provided with these three methods for manipulating the _this_ keyword which can be useful for controlling the behavios of functions.

# call()

The `call()` method allows you to call a function and pass it a specific `this` value and arguments provided individually.

Take for instance :

```
function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

let person = {
  name: "John"
};

greet.call(person, "Alice"); // Output: Hello, Alice! My name is John.

```

We have a function greet that simply logs out the name paramter.

We have an object literal of person with the key value pair of `name: "John"`

We then utilize the prototype function `call(thisarg, arg1,...,argN)` that takes in the new value to use as `this` when calling the function. In `greet` we refernece the parameter name and since we changed the _context_ of `this` to now refer to this.name to john we get that output and not undefined

# apply()

The `apply` method is similar to the call() method but it takes an array of arguments instead.

Take for instance:

```
const nums = [1,2,3,4,5];

const max = Math.max.apply(null,numbers)

console.log(max) // Output: 7


```

We have an array nums that has numbers.

We have a object max that utilizes the prototype `apply(thisArg, argsArray)` that takes in the new value to use as `this` when calling the function. When using Math.max.apply we set `this` to null but pass in nums. It essentially allows you to apply an array as individual arguments to a function, which is useful when the function normally expects a series of arguments (not an array).

# bind()

The `bind()` method returns a new function with a specified `this` value and any arguments passed into it. The `bind()`method doesn't call the function but will return a new function that can be called later (a callback)

Take for instance:

```
let person = {
  name: "John",
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

let greetPerson = person.greet.bind(person);

greetPerson(); // Output: Hello, my name is John.
```

We have an object `person` with key value pairs.

We have an object `greetPerson` that utilizes the prototype `bind(thisArg, arg1,...,argN)` in which `thisArg` references the value to be passed as the this parameter to the target function when the bound function is called. In this case the `greetPerson` object is bound to `greet()` because for `argN` we passed in the object `person`. Thus we now have a callback function `greetPerson`.
