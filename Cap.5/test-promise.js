/**
 * Created by Jimmy Rodriguez on 23/12/2015.
 */


var File = require('fs');

var promise = File.open('text.txt');


promise.addCallback = function (data) {

    //this is the process data
};


promise.addErrback = (function(error){

    //this is an error
})

