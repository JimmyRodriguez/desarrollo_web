/**
 * Created by jimmy on 25/01/16.
 */

var async = require("async");

async.parallel({
   one: function(callback){
       setTimeout(function(){
           console.log("Task_1");
           callback(null,1);
       },3000);

   },
    two: function (callback){
        setTimeout(function(){
            console.log("Task_2");
            callback(null,2);
        },2000);
    },
    three: function(callback){
        setTimeout(function(){
            console.log("Task_3");
            callback(null,3);
        },1000);
    }


});
