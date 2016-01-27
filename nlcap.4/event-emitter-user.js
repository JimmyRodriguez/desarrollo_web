//created by jimmy rosa
//use the method ON en la instancia que se creo del la clase events.EventEmitter()

var events = require("events");
var emitter = new events.EventEmitter();

var username = "colin";
var password = "amberley4";

//this is the listener handler is use for to wait the moment occurs the event, when occurs the to trigger.
emitter.on("addUser",function(username,password){

console.log("Added user " + username +' '+ password);


});

//here use the event addUser
emitter.emit("addUser",username,password);
