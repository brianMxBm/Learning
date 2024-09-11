# Types of functions

As we know, in JavaScript functions and objects are the same, that being said we can do many things with functions for instance we can pass them as arguments to other functions, functions can be returned by other functions and functions can be assigned to values.

# Arrow Functions

```
const greet = () => {
  console.log("Hello");
};
greet();

```

An arrow function in JavaScript has various caveats to know:

1.  Arrow functions don't have their own bindings to `this`, `arguments`, or `super`, and should not be used as methods.

    Note: In regards to `this` it will bind to it's surrouding lexical enviornments `this`

    ```
    const obj = {
        name: "John",
        greet: function() {
        console.log(this.name); // "John" because 'this' refers to 'obj'
    },

    arrowGreet: () => {
        console.log(this.name); // 'this' is not bound to 'obj',
    }

    };

    obj.greet(); // "John"
    obj.arrowGreet(); // undefined
    ```

2.  Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.

3.  Arrow functions cannot use yield within their body and cannot be created as generator functions. (We'll cover this below)

4.  Arrow functions are not hoisted.

# Regular Function

Regular functions in JavaScript refers to functions that return anyting and always run to completion after being invoked.

Ways to declare functions:

As a Constructor:
`const multiply = new Function("x", "y", "return x * y");`

As a Declaration:
`function multiply(x, y) {
  return x * y;
} 
`

As an Expression:
`const multiply = function(x,y) {
    return x * y
}`

As an Expression (named): `const multiply = name function(x,y) {
    return x * y
}`

As a method: `const obj = {
  multiply(x, y) {
    return x * y;
  },
};`

# Asynchronous Function

Asynchronous Functions return a Promise (Refer to Promise Lecture) which can be paused and resumed with the await operator. For a function to be asynchronous the `async` keyword must be present in the function declaration.

```
async function funcName(){
    return new Promise((resolve, reject)=>{
        setTimeOut(()=> {
            console.warn('hey)
        },1000)
    })
}
```

`funcName` will return a promise. (Refer to Promise Lecture)

# Generator Function

Generators provide a way to define iterative logic within a single function whoose execution is not continuous. Generator functions do not initially eecurte their code, they return a special type of iterator called a `Generator`. When a value is consumed by calling the generator's `next` method, it will execute until it encounters a `yeild` keyword. The `yeild` keyword returns two properties `done`
and `value`. `done` is a flag that denotes that the generator is done executing, and `value` being the yeilded value.

There is a specific syntax for declarating a generator function: `function*`

Take for instance this example:

We want to generate the fibonacci sequence without storing too much in memory.

```
function* fibonacciGenerator() {
    let a = 0, b = 1;
    while (true) {
        yield a;           // Yield the current Fibonacci number
        [a, b] = [b, a + b]; // Move to the next Fibonacci numbers
    }
}

const generator = fibonacciGenerator();

for (let i = 0; i < 10; i++){
  console.log(generator.next().value);
}

```

We do an infinite loop and yeild the current value in the sequence after setting a and b, we yield and pause the generator to return

```
{done: false, value: 0}
```

and then we `console.log` the fibonacci sequence until 10 iterations.

//TODO: ADD ASYNC GENERATOR FUNCTIONS

# Subset Of Functions

Some Regular Functions have behaviors that make them unique in their own way, however they're still Regular Functions.

1.  Higher Order Functions: These are simply functions that accept a function and return a function. In this example, appCounter is a higher-order function because it returns another function (the one that increments and logs the count). We can note how counter retains access to the count variable through closures, allowing the state to persist across multiple calls.

    ```
    function appCounter() {
    let count = 0;
    return () => {
        console.log(++count);
    };
    }

    let counter = appCounter();
    counter(); // Output = 1;
    ```

2.  Anonomous Functions: Anonymous functions are functions without a name. They are typically used when the function is not reused and can be defined inline, such as for short, one-off operations. These are commonly used in callbacks.

    ```
    setTimeout(function() {

    console.log('This is an anonymous function!');
    }, 1000);
    ```

3.  Callback Functions: A Callback function is a function passed as an argument to another function, which can then be invoked or executed within the outer function.

    ```
    function greet(name, callback) {
        console.log('Hello, ' + name);
        callback();
    }

    greet('Brian', function() {
        console.log('This is a callback function.');
    });
    ```

4.  Recursive Function: Recursion is a process in which a function calls itself as a subroutine. This allows the function to be repeated several times as it can call itself during execution.

    ````function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
    }

    console.log(factorial(5)); // Output: 120```
    ````
