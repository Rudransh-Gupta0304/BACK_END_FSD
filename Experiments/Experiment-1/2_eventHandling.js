
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// Simulate button click event
eventEmitter.on('click', () => {
    console.log("Button clicked!");
});

// Simulate mouse over event
eventEmitter.on('mouseover', () => {
    console.log("Mouse is over the button!");
});

// Simulate form submission
eventEmitter.on('submit', (name) => {
    console.log("Form submitted by: " + name);
});

// Trigger events
eventEmitter.emit('click');
eventEmitter.emit('mouseover');
eventEmitter.emit('submit', 'Rahul');
