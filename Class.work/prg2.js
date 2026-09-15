const { EventEmitter } = require("node:stream");

const emitter = new EventEmitter;

emitter.on("click" , () => {
    console.log("click event triggeered")
});

emitter.on("mouseover" , () => {
    
})