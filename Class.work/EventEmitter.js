// EventEmitter in Node.js

const EventEmitter = require("events");

// Create EventEmitter object
const events = new EventEmitter();

// Register "greet" event
events.on("greet", (name) => {
    console.log(`Hello CSE 24, my name is ${name}`);
});

// Register "exit" event
events.on("exit", () => {
    console.log("Exit event triggered");
});

// Trigger events
events.emit("greet", "Naincy");
events.emit("exit");


// --------------------------------------------------
// Simulate DOM-like event handling in Node.js
// addEventListener() -> on()
// dispatchEvent()  -> emit()
// --------------------------------------------------

const emitter = new EventEmitter();

// Event listener
emitter.on("click", (name) => {
    console.log(`${name} button was clicked!`);
});

// Trigger the event
emitter.emit("click", "Login")




