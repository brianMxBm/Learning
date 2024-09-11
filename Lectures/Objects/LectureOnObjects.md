# Objects?

Javascript boils down to the most important notion that everything is an object. Functions are objects, variables are objects. and yes objects are objects.

Objects are used to store key-pairs of data, essentially keyed collections and complex entities. There are multiple ways to create objects.

# Creating an object with a constructor

An easy way to instantiate an object is with a constructor, all it is is a function that utilizes the _new_ and _this_ keywords. When a function is called with the new keyword the function will be used as a constructor, it will

1. Create an empty JS object.

2. Points the prototype (will refer to this later) of the new object to the constructor function's prototype property if it's an object. Otherwise it will stay as a plain object with Object.prototype as it's prototype.

3. It will execute the constructor function with the given arguments (if any) binding the new object as the _this_ context so all references to _this_ now refers to the newly created object.

4. If the constructor returns a non-primative (will refer to this later) the return value becomes the result of the whole `new` expression.

Example of a constructor:

```
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Notice how the context of the _this_ keyword is refering to the parent that being the funciton Car. So we set the object's attributes with the given parameters when as such:

```
const myCar = new Car("Toyota", "Corolla", 2018)
```

# Creating an object with literals

Another way to create an object is to use object literals direvtly with key value pairs inside of `{}`. It's quick and works well when you only want to create one object but if you have to create more than one, they're not the best.

Take for instance an exmaple where you have a user object:

```
const user = {
    name= "Brian",
    highScore= 252,
    increment = function() {
        highScore++
    }
}
```

If I needed to make a myriad of different users, it breaks the DRY principal as I'll need to define many object literals that use the same increment function in-line which is bad practice. We never want to have the same functionality (name and score is fine because they need to be different) in an object because when we create multiple objects that space in memory is allocated for the function even though we could have a dedicated place for it.

# Creating an object with Object.Create()

Object.Create() is a static method that creates a new object using an existing object as the prototype of the newly created object.
