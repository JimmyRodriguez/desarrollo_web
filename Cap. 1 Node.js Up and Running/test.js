/**
 * Created by user on 20/12/2015.
 */

var http = require('http');

//opciones

var options = {

    host: 'localhost',
    port: 8124,
    path: '/?file=secondary',
    method:'GET'

};

var processPublicTimeLine = function(res){

    //fineshed, ok write data to a file

    console.log('finished request');


};

for(var i = 0; i < 2000; i++){

    //make the request, and then end it, to close connection

    http.request(options,processPublicTimeLine).end();

}