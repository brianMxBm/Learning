# The Event Loop

Javascript has a runtime model based on something called an Event Loop which is responsible for executing code, processing events and executing queued tasks. This is important due to the fact that JavaScript is single-threaded, meaning it's possible to only execute one task at a time, but it manages to do multiple tasks concurrently.

# Call Stack

JavaScript utilizes a Call Stack which keeps track of the currently executing functions (this is the Execution Context). A function gets popped from the stack upon completion (return) and is pushed onto the stack when a function is invoked.

# Heap

The heap is where JavaScript stores objects and dynamic memory allocation.This is where objects and arrays are stored, because the call stack only deals with function calls not data..

# Queue:

The JavaScript runtime uses a message queue which are essentially messages to be processed, this includes asynchronous tasks like promises or event listeners. When asynchronous operations like timers (setTimeout), network requests (fetch), or DOM events (like clicks) are initiated, they are offloaded to the browser's Web APIs.
When an asynchronous operation finishes, it's callback function is called an added to the Call Stack.
