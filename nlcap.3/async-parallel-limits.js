/**
 * Created by jimmy on 26/01/16.
 */

var async = require('async');

async.limitsParallelimit({

    one: function (callback) {
        setTimeout(function () {
            console.log("Task 1");
            callback(null, 1);
        }, 3000);
    },

    two: function (callback) {
        setTimeout(function () {
            console.log("Task 2");
            callback(null, 2);
        }, 2000);
    },

    three: function (callback) {
        setTimeout(function () {
            console.log("Task 3");
            callback(null, 3);
        }, 1000);
    }

},2, function(error,results){

    console.log(results);

});