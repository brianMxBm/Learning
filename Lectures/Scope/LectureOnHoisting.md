# Hoisting In Javascript

Hoisting is a phenomenon in JS that designates how functions are variables are stored durring the memory allocation phase that we discussed for the JS Execution Context

For instance in this situation:

```
console.log(x);
var x = 10;
```

The output of the `console.log()` will be undefined. The reason for this is due to the fact that the variable of x is hoisted.

Hoisting is a mechanism where variable and function declarations are moved to the top of their respective scopes before the code is executed. This has interesting behaviors.

Memory was allocated for the variable X due to hoisting in the Memory Allocation phase, however it wasn't initialized with the value of 10, rather variables when hoisted are initialized with the value of `undefined`

During the execection phase is when the x gets initialized with the value of 10.

Note: _let_ and _const_ cannot be accessed before initializaiton, they both have stricter rules than _var_.
