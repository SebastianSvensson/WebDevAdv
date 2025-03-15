/*
----------------------------------------------------------------------------------------
10. Javascript – General question – 8 points (true/false)
HINT: Review general JavaScript concepts, including syntax, data types, 
control structures, functions, objects, arrays, and the DOM. 
Be familiar with ES6 features like arrow functions, template literals, and destructuring.
----------------------------------------------------------------------------------------

*JavaScript Syntax*

    JavaScript syntax is the set of rules that define a correctly structured JavaScript program.

    Example:

        let message = "Hello, World!";
        console.log(message); // Output: Hello, World!

*Data Types*

    JavaScript has several data types, including:
    - Primitive types: string, number, boolean, null, undefined, symbol, bigint
    - Reference types: objects, arrays, functions

    Example:

        let str = "Hello";
        let num = 42;
        let bool = true;
        let obj = { name: "John", age: 30 };
        let arr = [1, 2, 3];
        let func = function() { console.log("Hello, World!"); };

*Control Structures*

    JavaScript supports various control structures, including conditionals and loops.

    Example:

        if (num > 40) {
            console.log("Number is greater than 40");
        } else {
            console.log("Number is 40 or less");
        }

        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }

*Functions*

    Functions are reusable blocks of code that perform a specific task.

    Example:

        function greet(name) {
            return `Hello, ${name}!`;
        }

        console.log(greet("Alice")); // Output: Hello, Alice!

*Objects*

    Objects are collections of key-value pairs.

    Example:

        let person = {
            firstName: "John",
            lastName: "Doe",
            age: 30,
            greet: function() {
                console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
            }
        };

        person.greet(); // Output: Hello, my name is John Doe

*Arrays*

    Arrays are ordered collections of values.

    Example:

        let fruits = ["apple", "banana", "cherry"];
        console.log(fruits[1]); // Output: banana

*The DOM (Document Object Model)*

    The DOM is a programming interface for web documents. 
    It represents the page so that programs can change the document structure, style, and content.

    Example:

      document.getElementById("myElement").innerText = "Hello, DOM!";

*ES6 Features*

    ES6 introduced several new features to JavaScript, including arrow functions, 
    template literals, and destructuring.

*Arrow Functions*

    Arrow functions provide a shorter syntax for writing functions.

    Example:

        let add = (a, b) => a + b;
        console.log(add(2, 3)); // Output: 5

*Template Literals*

    Template literals allow for easier string interpolation and multi-line strings.

    Example:

        let name = "Alice";
        let greeting = `Hello, ${name}!`;
        console.log(greeting); // Output: Hello, Alice!

*Destructuring*

    Destructuring allows for unpacking values from arrays or properties 
    from objects into distinct variables.

    Example:

        let [first, second] = fruits;
        console.log(first); // Output: apple

        let { firstName, age } = person;
        console.log(firstName); // Output: John
        console.log(age); // Output: 30

*Summary*

    Understanding general JavaScript concepts, including syntax, data types, 
    control structures, functions, objects, arrays, and the DOM, is 
    essential for web development. Familiarity with ES6 features like arrow functions, 
    template literals, and destructuring can help you write more concise and readable code.
*/