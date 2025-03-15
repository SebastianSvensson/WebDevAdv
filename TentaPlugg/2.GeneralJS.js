/*
-------------------------------------------------------------------------------------
2. Mixed Question – About JavaScript in General - Languages 3p (true/false)
HINT: Review general JavaScript concepts, such as variable declarations (var, let, const), data types, functions, scope, and closures. 
Understand the differences between JavaScript and other programming languages.
-------------------------------------------------------------------------------------

2. General JS
-----------------
1. Variable Declarations (var, let, const)
var
var is function-scoped and can be re-declared and updated.
Example:
var x = 10;
var x = 20; // Re-declaration is allowed
x = 30;    // Update is allowed
console.log(x); // Output: 30

let
let is block-scoped and can be updated but not re-declared within the same scope.
let y = 10;
y = 20;    // Update is allowed
// let y = 30; // Re-declaration is not allowed (Uncommenting this line will cause an error)
console.log(y); // Output: 20

const
const is block-scoped and cannot be updated or re-declared.
const z = 10;
// z = 20; // Update is not allowed (Uncommenting this line will cause an error)
// const z = 30; // Re-declaration is not allowed (Uncommenting this line will cause an error)
console.log(z); // Output: 10
----------------------------
2. Data Types
JavaScript has several data types, including:

Primitive Types: string, number, boolean, null, undefined, symbol, bigint
Reference Types: object, array, function

Example:
// Primitive Types
let str = "Hello, World!"; // string
let num = 42;              // number
let bool = true;           // boolean
let n = null;              // null
let u;                     // undefined

// Reference Types
let obj = { name: "Alice", age: 25 }; // object
let arr = [1, 2, 3, 4, 5];            // array
let func = function() { return "Hello!"; }; // function
-------------------------------
3. Functions
Functions can be declared in several ways:

Function Declaration example:
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!


Function Expression example:
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("Bob")); // Output: Hello, Bob!


Arrow Function example:
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Charlie")); // Output: Hello, Charlie!
-----------------------------------------------------
4. Scope
JavaScript has function scope and block scope.

Function Scope:
function foo() {
    var x = 10;
    if (true) {
        var x = 20; // Same variable
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 20
}
foo();

Block Scope:
function bar() {
    let y = 10;
    if (true) {
        let y = 20; // Different variable
        console.log(y); // Output: 20
    }
    console.log(y); // Output: 10
}
bar();
--------------------------------------------------
5. Closures
A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.

Example:
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}

const counter = outer();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
--------------------------------------------------------
6. Differences Between JavaScript and Other Programming Languages
*Dynamic Typing: JavaScript is dynamically typed, meaning variable types are determined at runtime.
*Prototypal Inheritance: JavaScript uses prototypal inheritance, unlike classical inheritance in languages like Java or C++.
*First-Class Functions: Functions in JavaScript are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
*Event-Driven: JavaScript is often used in an event-driven context, especially in web development.
----------------------------------------------------------
*/