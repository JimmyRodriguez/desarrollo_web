/**
 * Created by Jimmy Rodriguez on 29/12/2015.
 */
"use strict";

//se creara un servidor http para dar respuesta a las request entrantes
//en base a los pasos definidos en el archivo-estatico-servidor

    var http, path, fs, _base;

    http = require('http');
    path = require('path');
      fs = require('fs');
   _base = "/workspace/development/Cap.6";


// 1er. paso del archivo-estatico-servidor
//crear un servidor http y escuchar los request

    http.createServer(function(req,res){

        var pathname = _base + req.url;

        //var pathname = -_base + url.parse(req.url).pathname;
        console.log(pathname);


        path.exists(pathname,function(exists){

            if(!exists){

                res.writeHead(404);
                res.write('pagina no encontrada, error 404\n');
                res.end();

            }else{

                res.setHeader('Content-Type', 'text/html');

                res.statusCode = 200;

                var file = fs.createReadStream(pathname);
                file.on("open", function() {
                    file.pipe(res);
                });
                file.on("error", function(err) {
                    console.log(err);
                });
            }

        });


    }).listen(8124);

//mensaje que despega en la consola para mostrar en que puerto esta corriendo el server
console.log('el servidor http esta corriendo en el puerto 8124');



