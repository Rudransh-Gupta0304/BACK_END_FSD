const EventEmitter = require('events');
class MyEvent extends EventEmitter{

}
const events = new MyEvent();
const events = new EventEmitter();

events.on("greet", () => {
    console.log("Hello!");
});
events.on("exit" , () => {})
events.emit("greet");
events.emit("exit");

