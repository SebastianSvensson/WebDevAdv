/*
----------------------------------------------------------------------------------------
13. JavaScript DOM – Get things out from the DOM (how to operate it 6p
HINT: Know how to manipulate the DOM using JavaScript. 
Be familiar with methods like getElementById, querySelector, querySelectorAll, 
createElement, appendChild, removeChild, and modifying element attributes and styles.
----------------------------------------------------------------------------------------
*/

    // getElementById - Selects an element by its ID.
    let elementById = document.getElementById('myElement');
    console.log(elementById);


    // querySelector - Selects the first element that matches a CSS selector.
    let firstElement = document.querySelector('.myClass');
    console.log(firstElement);


    // querySelectorAll - Selects all elements that match a CSS selector.
    let allElements = document.querySelectorAll('.myClass');
    allElements.forEach(function(element) {
        console.log(element);
    });


    // createElement - Creates a new HTML element.
    let newElement = document.createElement('div');
    newElement.textContent = 'Hello, World!';


    // appendChild - Appends a child element to a parent element.
    document.body.appendChild(newElement);


    // removeChild - Removes a child element from a parent element.
    let parentElement = document.getElementById('parent');
    let childElement = document.getElementById('child');
    parentElement.removeChild(childElement);


    // setAttribute - Sets the value of an attribute on an element.
    let link = document.querySelector('a');
    link.setAttribute('href', 'https://www.example.com');


    // style - Modifies the inline styles of an element. 
    link.style.color = 'red';
    link.style.textDecoration = 'none';

/*
*Summary*

    Understanding how to manipulate the DOM using JavaScript is essential for web development. 
    Methods like getElementById, querySelector, and querySelectorAll allow you to select elements. 
    createElement, appendChild, and removeChild help you create and manage elements dynamically. 
    Modifying element attributes and styles enables you to change the appearance and behavior 
    of elements on the fly.
*/