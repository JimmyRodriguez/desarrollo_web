//the method async.series perform the activity from to find one or various erros and
// if to find one, then the program end your execution.. auqnue no haya terminado de ejecutar las demas funciones...


var async = require('async');

async.series([

    function(callback) {

        setTimeout(function () {

            console.log("task 1");
           // callback(new Error("problema con la task 1"),1);
	   callback(null,1);
        }, 3000);
    },

    function(callback) {

        setTimeout(function () {

            console.log("task 2");
            callback(null, 2);

        }, 2000);
    },

    function(callback){

        setTimeout(function(){

            console.log("task 3");
            callback(null,3);

        },1000);

    }


],function(error,resultados){

    console.log(resultados);

});




