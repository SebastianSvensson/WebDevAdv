/*
------------------------------------------------------------------------------------------------------------
9. Event Propagation – How does an event work, how does the browser engine identify what you’re clicking on js how does an event gets into the growers, 
how the browser engine can identify what you clicking on and its important to understand how it works in browser 3p (fill in stuff)
HINT: Understand event propagation in JavaScript, including event capturing, event bubbling, and event delegation. 
Know how to use event listeners and how the browser handles events.
------------------------------------------------------------------------------------------------------------

*Event Propagation*

    Event propagation is the process by which an event travels through the 
    DOM (Document Object Model) tree. There are three phases of event propagation:

        1. Event Capturing (Capture Phase)
        2. Target Phase
        3. Event Bubbling (Bubble Phase)

*Event Capturing*

    In the capturing phase, the event starts from the root of the DOM tree 
    and travels down to the target element. This phase is also known as the "trickling" phase.

    Example:

        document.getElementById('parent').addEventListener('click', function(event) {
            console.log('Parent capturing');
        }, true); // The third parameter 'true' indicates capturing phase

        document.getElementById('child').addEventListener('click', function(event) {
            console.log('Child capturing');
        }, true);


*Target Phase*

    In the target phase, the event has reached the target element. 
    The event is executed on the target element.

    Example:

        document.getElementById('child').addEventListener('click', function(event) {
            console.log('Child target');
        });


*Event Bubbling*

    In the bubbling phase, the event starts from the target element and 
    travels up to the root of the DOM tree. This phase is also known as the "bubbling" phase.

    Example:

        document.getElementById('child').addEventListener('click', function(event) {
            console.log('Child bubbling');
        });

        document.getElementById('parent').addEventListener('click', function(event) {
            console.log('Parent bubbling');
        });


*Event Delegation*

    Event delegation is a technique where a single event listener is added to a 
    parent element to manage events for multiple child elements. 
    This is useful for dynamically added elements.

    Example:

        document.getElementById('parent').addEventListener('click', function(event) {
            if (event.target && event.target.matches('button.child')) {
                console.log('Child button clicked');
            }
        });


*Using Event Listeners*

    Event listeners are used to handle events in JavaScript. 
    You can add an event listener to an element using the `addEventListener` method.

    Example:

        document.getElementById('button').addEventListener('click', function() {
            console.log('Button clicked');
        });


*How the Browser Handles Events*

    When an event occurs, the browser creates an event object and determines the target element. 
    The event then propagates through the DOM tree in the capturing phase, reaches the target phase, 
    and finally propagates back up in the bubbling phase. 
    Event listeners can be added to handle events during any of these phases.

*Summary*

    Understanding event propagation is crucial for handling events effectively in JavaScript. 
    Event capturing, target phase, and event bubbling are the three phases of event propagation. 
    Event delegation allows you to manage events for multiple child elements efficiently. 
    By mastering these concepts, you can create more efficient and maintainable event 
    handling in your web applications.

*/