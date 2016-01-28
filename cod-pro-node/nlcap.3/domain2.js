/**
 * Created by idtdev2 on 12/30/15.
 */

var fs = require('fs');
var domain = require('domain').create();
var Filename = "hola.txt";

fs.readFile(Filename,'utf8',domain.bind(function(error,data){

    if(error){

        throw error;

    }

    console.log(data);
    domain.dispose();

}));

domain.on('error',function(error){

    console.log("error capturado con el metodo bind " + error);

});
