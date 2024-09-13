# This in JavaScript

As we know the _this_ keyword in Javascript is a special identifier that refers to the context inw hich a function is executed, there can be various bindings for this though.

# Global Context: Default Binding

When _this_ is used outside of any function it will refer to the gloval object, in a web browser it will usually refer to the _window_ object.

# Object Method: Implicit Binding

When a function is called as a method of an object _this_ will refer to itself. This is known as Implicit binding because it's assigned by the JS engine at runtime

Example:

```
const person = {
  name: 'Om',
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

person.greet(); // Output: Hello, my name is Om.
```

Notice how `this` was set automatically.

# Event Handlers: DOM Binding

Wen an event handler is invoked, `this` will refer to the element that triggered the event.

For instance:

```
<button onclick="console.log(this)">Click me</button>
```

In this scenario `this` inside the event handler function will refer to the button element itself and provide access to the element's properties and methods

# Constructor Functions: New Binding

When a function is used as a constructor with the new keyword, `this` will refer to the newly created object.

For instance:

```
function Person(name) {
  this.name = name;
}

class Person {
   constructor(name) {
     this.name = name;
   }
}

const person = new Person('Om');
console.log(person.name); // Output: Om
```

In this scenario we used the person constructor to create the person object, `this` refers to the newly created object allowing us to set the `name` property.

# Arrow Functions:

Arrow functions don't bind their own `this` value, instead inheriting the value from the lexical environment

```
const person = {
  name: "Om",
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.name}`);
    }, 1000);
  }
};

person.greet();
```

In this case `person.greet()` will output `Hello, my name is Om`.
