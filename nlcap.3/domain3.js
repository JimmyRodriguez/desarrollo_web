

var fs = require('fs');
var domain = require('domain').create();
var FileName = "hola.txt";


fs.readFile(FileName,'utf8',domain.intercept(function(data){

    console.log(data);

    domain.dispose();


}));

domain.on('error',function(error){

    console.log('Error capturado ' + error);

});