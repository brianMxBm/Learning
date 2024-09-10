# Scope In Javascript

In terms of JS scope refers to the notion of acessibility of visibility of variables, objects and functions durring runtime

# Variable Scope

Variable Scope determines the acessibility and lifetime of variables and parameters. There are two main types of scope:

1. Global Scope

2. Local Scope

# Global Scope

Globally scoped variables are acessibily from anywhere in the code, even functions (nested functions, etc). Essentially variables that are defued outside of any function

Example of Global Scope:

```
var message = 'Hello, I am globally available!';

function printMessage() {
  console.log(message);
}


printMessage(); //Output: 'Hello, I am globally available!';

```

# Local Scope

Locally scoped variables are variables that are declared inside of functions and can only be utilized inside of that function. This also includes nested functions as we'll see below with _Scope Chaining_

Example of Local Scope:

```

function printMessage() {
  var message = 'Hello, World!';
  console.log(message);
}

printMessage(); // Output: Hello, World!
console.log(message); // Error.
```

# Scope Chaining

Scope Chaining refers to the notion of accessing parent-scoped variables from within child contexts or parent contexts.

For instance if we access a globally scoped variable from within a defined function and if access a variable defined in the defined function, we're leveraging the notion of _Scope Chaining_

Example of Scope Chaining:

```
var globalVariable = "Hello"
function outer() {
  var outerVariable = 'My';

  function inner() {
    var innerVariable = 'World';
    console.log(globalVariable + ' ' + outerVariable + ' ' + innerVariable);
  }

  inner(); // Output: Hello My World
}

outer();
```

We see how we utilize outterVariable, global variable and inntervariable all in tandem without issue, this is due to Scope Chaining and how we have access to all of this functions, specificailly in the inner() where we can use outerVariable since it's in the parent context's scope.

This notion is very similiar to another known as _Prototype Chaining_

# Block Scope

In ES6 (ECMAScript6), JS only had function scope with the _var_ keyword. Now we have access to the _let_ and _const_ keywords, variables declared with either of these keywords have blockscope.

_let_: Allows for the mutation of the set variable.

_const_: Is a constant that cannot be mutated.

Blockscope means that variables are only acessible within the block _({)}_ they are defined in.

Example of Block Scope:

```
function printMessage() {
  if (true) {
    let message = 'Hey, Block!';
    console.log(message); // Works!
  }

  console.log(message); // Error:
}

printMessage();
```

We note how we're not able to access printMessage's variable of message so we get an error when we try and reference it, since it's only acessible from within the printMessage's if block

After ES6 it's always best to use let or const since var since they're more predictible and maintainbale. The reason for this being is that var doesn't respect block scope.[text](LectureOnScope.md)
