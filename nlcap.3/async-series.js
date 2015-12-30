

var async = require('async');



async.series([


    function(callback) {

        setTimeout(function () {

            console.log("task 1");
            callback(new Error("problema con la task 1"),1);
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




