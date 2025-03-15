/*
------------------------------------------------------------------------------
15.JavaScript Code – Given code and then explain what happens with it. 4p
Hint: Practice reading and understanding JavaScript code. 
Be able to explain what the code does, identify any issues, and describe the flow of execution.
------------------------------------------------------------------------------

*Example Code*

Let's consider the following example code:
*/

function exampleFunction(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = exampleFunction(numbers);
console.log(evenNumbers); // Output: [2, 4, 6]

/*
*Explanation*

    1. **Function Definition**:
        - The `exampleFunction` is defined to take an array `arr` as an argument.
        - It initializes an empty array `result` to store the even numbers.

    2. **For Loop**:
        - The function uses a `for` loop to iterate over each element in the `arr` array.
        - The loop runs from `i = 0` to `i < arr.length`, ensuring that each element is processed.

    3. **Conditional Check**:
        - Inside the loop, there is an `if` statement that checks if the current element `arr[i]` is even (`arr[i] % 2 === 0`).
        - If the condition is true, the element is pushed into the `result` array.

    4. **Return Statement**:
        - After the loop completes, the function returns the `result` array, which contains all the even numbers from the input array.

    5. **Function Call**:
        - The `exampleFunction` is called with the `numbers` array `[1, 2, 3, 4, 5, 6]`.
        - The returned value is stored in the `evenNumbers` variable.

    6. **Output**:
        - The `console.log(evenNumbers)` statement prints the `evenNumbers` array to the console, which is `[2, 4, 6]`.

*Identifying Issues*

    In this example, there are no issues with the code. 
    It correctly identifies and returns the even numbers from the input array.

*Flow of Execution*

    1. The `exampleFunction` is defined.
    2. The `numbers` array is initialized with the values `[1, 2, 3, 4, 5, 6]`.
    3. The `exampleFunction` is called with the `numbers` array.
    4. Inside the function:
        - An empty `result` array is initialized.
        - The `for` loop iterates over each element in the `numbers` array.
        - The `if` statement checks if each element is even and pushes it to the `result` array if true.
    5. The `result` array `[2, 4, 6]` is returned.
    6. The `evenNumbers` variable stores the returned array.
    7. The `console.log(evenNumbers)` statement prints `[2, 4, 6]` to the console.

*Summary*

    Understanding how to read and explain JavaScript code is crucial for 
    debugging and development. By breaking down the code into smaller parts, 
    you can identify its functionality, flow of execution, and any potential issues. 
    Practice reading and explaining different pieces of code to improve your 
    comprehension and problem-solving skills.
*/