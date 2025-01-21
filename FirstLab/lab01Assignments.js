console.log('Hello world');

// ----------------- |
// Assignment part 1 |
// ----------------- |

// 1. Variables and datatypes
let string = "String";
let int = 1;
let float = 1.2;
let array = [1, 2, 3];
let set = new Set([1, 2, 3, 4, 5]);
let boolTrue = true;
let boolFalse = false;
let nullValue = null;
let undefinedValue = undefined;
//set.add(6);
let car = new Object;
car.make = "Chrysler";
car.year = 2025;

console.log(string);
console.log(int);
console.log(float);
console.log(array);
console.log(set);
console.log(boolTrue, boolFalse);
console.log(nullValue, undefinedValue);
console.log(car.make, car.year);

// 2. Loops
for(let i = 1; i < 11; ++i) {
    console.log(i)
}

let i = 1;
while(i < 11) {
    console.log(i);
    ++i;
}

// 3. Largest number in array
function findLargestNumberInArray(arrayParameter) {
    let highestNumber = 0;
    for(i = 0; i < arrayParameter.length; ++i){
        if (arrayParameter[i] > highestNumber) {
            highestNumber = arrayParameter[i];
        }
    }
    return highestNumber;
}

const arr = [3, 7, 2, 9, 5];

console.log(findLargestNumberInArray(arr));

// 4. Functions
const factorialOfANumber = function (integerParameter) {
    if(integerParameter < 0) {
        return undefined
    } else if (integerParameter === 0 || integerParameter === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= integerParameter; ++i) {
            factorial *= i;
        }
        return factorial;
    }
}

console.log(factorialOfANumber(4    ));

// 5. Objects

let car1 = {
    make: "Citroen",
    model: "C4",
    wheels: 4,
    engine: {cylinders: 4, displacement: 1.8},
    getName: function() {
        return this.make + ' ' + this.model;
    }
}

console.log(car1.getName())
console.log(car1.engine.cylinders, car1.engine.displacement)
console.log(car1.wheels)

// 6. forEach with callback

let fruits = ["Apple", "Banana", "Cherry", "Date"]

fruits.forEach(element => {
    console.log(element)
});

// 7. Capitalize The First Letter Of Each Word

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
}

console.log(capitalizeWords("This is a sentence where the leading letters of each word should be capitalized."))

// 8. Merge Two Objects
const person = {name: "Alice", age: 25}
const jobInfo = {role: "Developer", age: 30}

function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2)
}

const merged = mergeObjects(person, jobInfo)
console.log(merged)

// 9. Count character frequency in a string

function charFrequency(string) {
    const frequency = {};

    for (let char of string) {
        if(frequency[char]) {
            ++frequency[char]
        } else {
            frequency[char] = 1
        }
    }
    return frequency
}

console.log(charFrequency("banana"))

// 10. Create a simple class (ES6 Classes)

class Rectangle {
    constructor(width, height){
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }

    static isSquare(rectangle){
        return rectangle.width === rectangle.height
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.getArea());
console.log(Rectangle.isSquare(rect));

const square = new Rectangle(5, 5);
console.log(square.getArea());
console.log(Rectangle.isSquare(square));

// ------------------|
// Assignment part 2 |
// ------------------|

// 1. Convert regular function to arrowfunction

let add = (a, b) => {
    return a + b;
}

console.log(add(5, 3))

// 2. Single parameter arrowfunction
const greet = (string) => 'Hello, ' + string

console.log(greet("Alice"))

// 3. Basic Callback Function

function process(number, callback) {
    return callback(number)
}

const callback = (number) => number*2;

console.log(process(6, callback))

// 4. Arrow function in map
let mapArray = [1, 2, 3, 4]

let multipliedArray = mapArray.map(number => number * 2)

console.log(multipliedArray)

// 5. Pass an anonomous function to filter
let filterArray = [5, 10, 15, 20, 30, 30, 45, 1, 3, 20, 50]

let arrayFiltered = filterArray.filter( number => number > 10)

console.log(arrayFiltered)

// 6. Extract User Names

const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Charlie'}
];

let arrayOfUserNames = users.map(user => user.name)

console.log(arrayOfUserNames)

// 7. Count Occurences

let arrayOfFruits = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']

let occurencesOfFruits = arrayOfFruits.reduce((count, fruit) => {
    if(count[fruit]) {
        ++count[fruit]
    } else {
        count[fruit] = 1
    }
    return count
}, {})

console.log(occurencesOfFruits)

// 8. Sum of Numbers

let arrOfNumbers = [10, 20, 30, 40]

let sumOfNumbers = arrOfNumbers.reduce((sum, number) => {
    sum += number
    return sum
})

console.log(sumOfNumbers)