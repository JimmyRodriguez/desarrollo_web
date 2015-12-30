/**
 * Created by Jimmy Rodriguez on 22/12/2015.
 */



var net = require('net'); // se carga el modulo

var server = net.createServer(function(conn){

    console.log('conectado');

    conn.on('data', function(data){

       console.log(data + 'de ' + conn.remoteAddress + ' ' + conn.remotePort );

        conn.write('Repitiendo: ' + data);

    });

    conn.on('Close', function(){

        console.log('El cliente ha cerrado la conexion')
    });



}).listen(8124);

console.log('escuchando por el puerto 8124');