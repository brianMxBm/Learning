# Concepts:

# What is an API

An API, or Application Programming Interface, is a set of protocols and tools that allows different software applications to exchange data, either with other APIs or directly with clients. APIs enable data transfer between systems using various paradigms, such as REST, which is a stateless protocol typically used with HTTP; GraphQL, which allows clients to request specific data fields; and RPC, designed for remote function execution. For example, Fashion Nova’s website uses an API to deliver HTML via server-side rendering, as seen in the request headers. This approach helps deliver a fully-rendered page optimized for speed and SEO.

# How does an API work

APIs operate within the Application layer, which is the topmost layer of the OSI model, responsible for enabling communication between software applications. An API functions by having a client, or consumer, initiate a request. This request is sent to a server via a specific paradigm, such as REST, GraphQL, or RPC.

Request: The client sends a request to the API, typically containing information about what data it needs or what action it wants the server to perform.

Processing: The server receives the request, processes it, and performs any necessary actions, like querying a database or running business logic.

Response: The server then sends a response back to the client. In REST and GraphQL, this response usually includes the requested data in a structured format, like JSON. The client can then use this data to render information on the frontend or perform other operations.

This request-response cycle enables applications to communicate efficiently, allowing for seamless data exchange and integration between different software systems.

# What is the DOM

The Document Object Model represents HTML or XML documents as a tree data structure where elements, attributes and text are all objects / nodes. There are two key processes involved with rendering it, that being painting and reflow.

Reflow is the process where the browser calcualtes the layout of the page, determining the size, position and dimensions of elements relative to one another. This can occur upon render, resizing the window or viewport, changing styles and content changes.

Repainting or painting is the process of changes being made to the appearnce of the elements. Such as colors, shadows, text, images Painting occurs whenever visual style changes occur but don't require invoking recalculating layout changes, such as when changing the background color of an element

If there are any changes to the DOM it's rebuilt on the element and child elements, esentially a re-render of all of the elements. The virtual DOM builds upon this.

# What is the Virtual DOM

The Virtual DOM is an in-memory representation of the actual DOM. When React renders JSX, it updates the Virtual DOM first. Subsequent changes create a new Virtual DOM, which React compares to the previous one using a process called reconciliation. This process involves heuristics that identify components with changes, allowing React to re-render only the necessary parts. React then applies these updates to the real DOM efficiently, minimizing the number of changes needed without re-rendering the entire DOM.

# What is babel

Babel is a Javascript compiler that's used to convert that is used to convert ECMAScript code into backwards comptaible versions of javascript, in the React Ecosystem it can be used to cconvert jsx into regular javascript.

# What is the difference between null and undefined in JavaScript?

During the compilation phase of the Javascript Engine, as we discussed variables are hoisted and have the value of undefined. Undefined is indicates the absence of a value, that may or may not change. Undefined is also a primitive.

Null on the other hand is an assignment value that represents the intential absence of a value. Null is also a primitive

# Explain what REST is and what the different HTTP methods there are, the difference between a PUT and a PATCH.

Rest is an architecture standard that defines how API's should work, its defined as the representation of the state of a resources to the requesteor. Data can be delivered in the format os HTTP, JSON, Plain Text, etc.

There are multiple HTTP methods which are utilized with rest some of them being

GET which requests a representation of a specified resource.

POST which submits data in the body to a specified resource causing a change in state on the server.

DELETE which deletes a specified resources.

PATCH which applies partial modifications to a resource.

# What's the difference between props and state

Props are used to pass data between parent components and child components, they're immutable meaning they cannot be changed by the child component establishing a unidirectional data flow.

State on the other hand is used to manage data that can change over time either be it from changes from the server or made on the client. State is mutable meaning it can be updated in the component. State is local to the component where it is defined.

# What is a promise, what is async await

A promise in Javascript is an object that represents the completion of an asnchronous operation be it a failure or a success. Promises are utilized to let asychronous methods to return values like synchronous messages, the difference being that a promise is returned which has states that being pending, fullfilled or rejected.

Before ES6 promise chaining was achieved by using the .then() and .finally() methods, in ES6 however the keywords async and await were introduced, async can be used to designated asynchronous functions where the await keyword can be used to wait for a promise to resolve and get it's fullfillment value, it can oly be used inside of an async function though.

# What is memoization, what is the difference between useMemo and useCallback

Memoization

Memoizaton is an optimization technique used to cache data. There are mmultiple ways that it can be implemented in react native.

useMemo is a hook in react and react native that allows us to cache a value from an expensive calculation, on the next render if nothing in the dependency array changes based off of referential equality (objects wouldn't work, they have be destructured and compared based on the properties).

useCabllack on the other hand allows us to memoize function calls, it will store a function definiation and oes not call the function, it will cache the function itself not the return value.

# What's the difference between == and ===.

The main difference between double equals and triple equals in javascript has to do with the notion of type coersion. Type coercion is the implicit conversion of values from one type to another not to be confused with Type Conversion. Double equals performs type coercion converting both values to the same type before comparing them, and it will ONLY compare on value not type. Triple equals does not perform type coercion and it checks for both value and type equality.

# What's the difference between let, const and var in JavaScript.

In ES6 the new keywords of const and var were introduced as well as the notion of block scope. Block scope essentially means that variables declared outside of a {} cannot be accessed outside of said block.

Using let to define a variable allows to declare a variable that can be reassigned within the block scope.

Using const to define a variable on the other hand allows you to declare a variable that cannot be reassigned at all within the block scope. It's important to keep in mind that objects and array's can still have their contents modified though.

# What's the difference between setTimeOut and setInterval.

setTimeOut only executes the provided callback function only after the specified delay.

setInterval executes the code repeatedly during the interval.

The main difernece between them is that setINterval will keep on firing function calls while setTimeout only does it once.

# Explain some react life cycle methods.

In React, a components life cycle has three main phases. Mounting Phase, Updating Phase and Unmounting Phase.

The mounting phase is when the component is created and inserted into the DOM. Many lifecycle methods are invoked by react such as the constructor method to initialize the components state and methods, the render method for generating the components virtual dom representation, it's called everytime the component needs to be re-rendered either because its props or state has changed or beacuase a parent has re-rendered.

# What is Expo

Expo is a React Native framework that makes develiping apps easier, providing things such as file
based routing with expo route (similiar to Next JS's), standard libraries and modules, Expo Application Services for easy deployments and over the air updates, etc

# What is the box model in CSS

The box model refers to a term in CSS that means that a box is wrapped around every HTML elemenet that consists of padding, borders and margins

# What is the difference between Flex & Grid

CSS grid is a two-dimensional layout system that allows you to create complex grid-layours with rows and columns.

CSS Flex is a one dimensional layout system that allows you to only work on either row or columns at a time.

# What is lazy loading, and how does it help with performance?

Lazy loading is a technique that delays the loading of resources, such as images, videos, or components, until they are actually needed on the page. Instead of loading all assets up front, lazy loading loads resources only when they come into view or are required for user interaction. This approach helps improve performance by reducing the initial load time, which means that the browser has fewer resources to download and process when the page first loads.

# What is hoisting in JavaScript, and how does it affect variable and function declarations?

In Javascript hoisting refers to the phenomenon on how functions are variables are stored during the memory allocation phase. During the compilation phase, variable and function declarations are moved to the top of their respective scopes before being executing. Memory is allocated for variables but don't get initailzed with a value until the execution phase and are initialized with undefined.

let and const are hoisted but are placed in the Temporal Dead Zone meaning they can't be accessed before the declaration is executed

function declarations and the bodies are full hoisted allowing for use before being declared.

function expressions like arrow functions or when assigned to variables are not hoisted.

# What is the Spread Operator in JavaScript

ES6 introduced the spread operator (...), which allows you to "spread out" elements of an iterable (such as strings, arrays, or even objects) into individual elements or properties. This operator provides a concise and flexible way to work with iterables, making it easier to copy, merge, or extract elements.

# What is the Javascript Execution Context

# What is Redux

# What is Context in React / React Native

Context in React assists with passing data between components without having to
pass props down manually between parent and child components. This is achieved via the use
of a Provider that will wrap components that will access the conetext's values. Context then acts as the storage where the data is stored, the hook useContext is used to consume
the information from the provider. Context is utilized to avoid anti-patterns like prop-drilling and stale data.

# What is the Event Loop

# What is hermes

# What is the bridge in React Native

The bridge in React Native is a mechanism that uses an async message system that allows for JavaScript to communicate with native modules. It's done via the message queue with each message batched and sent in sequence without blocking the JavaScript thread.

# What are some optimization techniques in React Native

# How would you implement Dark Mode in a React Native App
