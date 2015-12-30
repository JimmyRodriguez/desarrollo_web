/**
 * Created by idtdev2 on 12/30/15.
 */



var fs = require('fs');
var domain = require('domain').create();


domain.run(function(){

    fs.readFile('hola2.txt','utf8',function(error,data){

        if(error){

            throw error;

        }

        console.log(data);

        domain.dispose();

    });


});

domain.on("error",function(error){

    console.log("la excepcion fue capturada " + error);

});