/*
---------------------------------------------------------------------------------------
12. Arrays JavaScript decide what happens there 5p
HINT: Be comfortable with array operations in JavaScript, 
such as adding/removing elements, iterating over arrays, and using array methods like 
map, filter, reduce, forEach, push, pop, shift, and unshift.
---------------------------------------------------------------------------------------

*/
    // push - Adds one or more elements to the end of an array and returns the new length of the array.
    let fruits = ["apple", "banana"];
    fruits.push("cherry");
    console.log(fruits); // Output: ["apple", "banana", "cherry"]


    // pop - Removes the last element from an array and returns that element.
    let lastFruit = fruits.pop();
    console.log(lastFruit); // Output: "cherry"
    console.log(fruits); // Output: ["apple", "banana"]


    // shift - Removes the first element from an array and returns that element.
    let firstFruit = fruits.shift();
    console.log(firstFruit); // Output: "apple"
    console.log(fruits); // Output: ["banana"]


    // unshift - Adds one or more elements to the beginning of an array 
    //           and returns the new length of the array.
    fruits.unshift("mango");
    console.log(fruits); // Output: ["mango", "banana"]


    // forEach - Executes a provided function once for each array element.
    fruits.forEach(function(fruit) {
        console.log(fruit);
    });
        // Output:
        // "mango"
        // "banana"


    // map - Creates a new array with the results of calling a provided 
    //       function on every element in the calling array.
    let numbers = [1, 2, 3];
    let doubled = numbers.map(function(number) {
        return number * 2;
    });
    console.log(doubled); // Output: [2, 4, 6]


    // filter - Creates a new array with all elements that pass the 
    //          test implemented by the provided function.
    let evenNumbers = numbers.filter(function(number) {
        return number % 2 === 0;
    });
    console.log(evenNumbers); // Output: [2]

    // !!
    // reduce - Executes a reducer function (that you provide) on 
    //          each element of the array, resulting in a single output value.
    let sum = numbers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    console.log(sum); // Output: 6

/*
*Summary*

    Understanding and being comfortable with array operations in JavaScript 
    is crucial for effective programming. 
    The methods push, pop, shift, and unshift allow you to add and remove elements from arrays. 
    The forEach method helps in iterating over arrays, while map, filter, 
    and reduce provide powerful ways to transform and aggregate array data.
*/