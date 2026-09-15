//Event 
//Event Emitter- on(call)-register event listner,emit()-trigger event/create event/fire event
EventEmitter=require('event');
const event=new EventEmitter();
event.on("greet",()>={
    console.log("this is event emitter")

})
event.emit("greet");