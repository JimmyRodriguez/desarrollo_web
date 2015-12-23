/**
 * Created by Jimmy Rodriguez on 23/12/2015.
 */


var File = require('file');

var promise = File.read('text.txt');

promise.addCallback(function(data){

//this is the process data
});


promise.addCallback(function(error){

   //this is an error
});
