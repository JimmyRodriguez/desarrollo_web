/**
 * Created by user on 20/12/2015.
 */

//este es una modificacion del arhcivo index, con el fin de demostrar el funcionamiento
//asincrono de node.js


var http = require('http');   //se carga el modulo http para crear la comunicacion
var fs = require('fs');         //se carga el modulo File system = fs para poder utilizar la funciones de leer archivos

http.createServer(function(req,res){

    //abrir y leer el archivo index.js
    fs.readFile('hola_mundo1.js','utf8', function(err,data){//start function (err,data)

        res.writeHead(200,{'Content-type': 'text/html'});


        if(err){

            res.write('no se encuentra el archivo para leerlo\n');

        }else{

            //si se encuentra el archivo index.js entonces leerlo
            res.write(data);

            res.end();
        }//end else


    }//end function (err,data)
    );//end fs.readFile


}).listen(8124, function(){console.log('bound to port 8124');});


console.log('Server is running on 8124\n')
