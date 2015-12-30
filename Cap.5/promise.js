/**
 * Created by Jimmy Rodriguez on 23/12/2015.
 */

//var fs = require('fs');

function test_and_load (filename){//start function test_and_load

    var promise = new process.Promise();

    fs.stat(filename).addCallback(function(stat){//start funcion anonima

        if(!stat.isFile()){
            promise.emitError(error);

            return;

        }//end if

        //otra manera de leer un archivo  dentro de
        fs.readFile(filename).andCallback(function (data){//start function anonima

            promise.emitSuccess(data);

            //end function anonima
        }).addErrback(function(error){//start function anonima


            promise.emitError(function(error){

        });//end function anonima


    }).addErrback(function(error){

            promise.emitError(error);

    });//end function anonima

    return promise;

});
}//end function test_and_load




