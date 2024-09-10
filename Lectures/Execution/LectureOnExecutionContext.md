# The JavaScript Execution Context

The JS Execution Context is what drives the JS enginer and how everything will function properly. It's composed of two phases:

1. Compilation Phase

2. Execution Phase

# Compilation Phase

JavaScript is often referred to as an interpreted language, but modern JavaScript engines actually compile the code before executing it.

1. Parsing:
   The JavaScript engine reads the source code and breaks it down into meaningful chunks called tokens. This process is called lexing or tokenization. These tokens are then organized into a tree-like structure called the Abstract Syntax Tree (AST), which represents the grammatical structure of the code.

   Example of AST:

   ```
   Program
   FunctionDeclaration
    Identifier: add
    FunctionExpression
      Identifier: null
      Params
        Identifier: num1
        Identifier: num2
      Body
        ReturnStatement
          BinaryExpression
            Identifier: num1
            Identifier: num2
   ```

2. Code Generation:
   The AST is then used to generate machine code or bytecode, which can be executed directly by the JavaScript engine. This process can involve various optimizations, such as:

   - Constant folding: Evaluating expressions with constant values at compile time.
   - Dead code elimination: Removing code that is never executed.
   - Inlining: Replacing function calls with the actual function body.

3. Just-in-Time (JIT) Compilation:
   Modern JavaScript engines like V8 (used in Chrome and Node.js) employ JIT compilation.
   During execution, the engine monitors the code's behavior and identifies frequently executed parts (hot code). These hot code sections are then compiled into highly optimized machine code, further improving performance.

# Execution Phase

In this phase the JS engine executes the code line by line and creates the _Global Executiion Context_ and creates subsequent _Execution Contexts_ for each function call. These Execution Contexts are added to the _Execution Stack_ which utilizes the LIFO data structure.

# Execution Context Types

Think of an Execution Context as a containerized environment in which JS code is executed, it may include information such as:

- The value of the _this_ keyword
- Variables defined in the function
- The Scope Chain

Note: When the execution context is created it's vital to understand that variables in memory are stored and their value is assigned to undefined at that momemnt. Funcitons are stored as is in the memory.

There are three types of Execution Contexts:

# Global Execution Context:

- This context is created before any code is executed
- It's the default execution context that goes into the Execution stack.
- It includes global variables and funcitons that are accessible form anywhere in the code.

An example of an object that gets addedto the Global Execution Context is the _window_ object in Vanilla JS.

# Function Execution Context:

- The Function Context is created when a function is called. Every tine a function is called a new execution context is created
- The Function Context includes parameters and variables.
- Any functions contexts nested within one another has access to the parent contexts' variables parameters.
