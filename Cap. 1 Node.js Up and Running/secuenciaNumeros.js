/**
 * Created by user on 20/12/2015.
 */

    //esta funcion es llamada de manera SINCRONA para escribir numero de salida de 1 a 100


//este ambiente tiene 2 aplicaciones y son las siguientes:
        // - una aplicacion  como servicio
        // - y la otra aplicacion como test para probar la aplicacion de servicio

var http = require('http');
var fs = require('fs');


// funcion para escribir los numeros de 1-100
function escribirNumeros (res){

    var contador = 0;

    for(i = 0; i <=100; i++){

        contador++;

        res.write(contador.toString() + '\n');


    }//end for
}//end function


//CREAR EL SERVIDOR WEB
http.createServer(function(req,res){

    //se crean variables
    var query =  require('url').parse(req.url).query;
    var app = require('querystring').parse(query).file + ".txt";

    //contenido del encabezado
    res.writeHead(200,{'Content-type': 'text/html'});

    //escribir los numeros para la salida
    escribirNumeros(res);

    //timer para abrir el archivo y leer el contenido
    setTimeout(function(){

    console.log('abriendo' + app + '\n');

    //abrir y leer el contenido del archivo
     fs.readFile(app,'utf8',function(err,data){

         if(err){

             res.write('No se encuentra o no se puede abrir el archivo \n');

         }else{

             res.write(data);

         }

         res.end();

     });

    },2000);

}).listen(8124);

console.log('El servidor esta corriendo en el puerto 8124')



