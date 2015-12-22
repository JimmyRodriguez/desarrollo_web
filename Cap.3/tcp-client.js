/**
 * Created by Jimmy Rodriguez on 22/12/2015.
 */

var net = require('net');

var client = new net.Socket(); // se crea un objeto cliente de tipo nuevo socket
client.setEncoding('utf8'); //establece el formato del conjunto de caracteres


//conectarse al server
client.connect('8124','10.14.8.120', function(){


    console.log('Servidor conectado');
    client.write('quien necesita el browser para comunicarse?');


    //preparar el terminal para la entrada de informacion
    process.stdin.resume();

    //cuando se reciben datos, se envian para el server
    process.stdin.on('data',function(data){

        client.write(data);

    });

    //cuando se reciben los datos de regreso, imprimir en la consola

    client.on('data',function(data) {
        console.log(data);
    });


    //cuando el server cierra conexion
    client.on('close',function() {
        console.log('connection is closed');
    });


});


