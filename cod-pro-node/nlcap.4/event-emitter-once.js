/**
 * Created by jimmy on 27/01/16.
 */

var events = require('events');
var emitter = new events.EventEmitter();

username = 'jimmy';
password = 'lyam'; 

emitter.once("addUser",function(username,password){
	
	console.log("Usuario : " + username +' '+ password);

});


emitter.emit("addUser",username,password);
emitter.emit("addUser",username,password);

