
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// Register greet event
eventEmitter.on('greet', () => {
    console.log("Hello! Welcome to Node.js.");
});

// Register exit event
eventEmitter.on('exit', () => {
    console.log("Exiting the application...");
});

// Trigger events
eventEmitter.emit('greet');
eventEmitter.emit('exit');
