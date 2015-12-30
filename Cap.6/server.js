
var express     = require('express');
var app         = express();
//var mongoose     = require('mongoose');
// Conexión con la base de datos
//mongoose.connect('mongodb://localhost:27017/angular-todo');

// Configuración

 //para express 4.x
 app.configure = function() {
 // Localización de los ficheros estaticos
 app.use(express.static(__dirname + '/Cap.6'));
 // Muestra un log de todos los request en la consola
 app.use(express.logger('dev'));
 // Permite cambiar el HTML con el método POST
 app.use(express.bodyParser());
 // Simula DELETE y PUT
 app.use(express.methodOverride());
 };


// Carga una vista HTML simple donde irá nuestra Single App Page
// Angular Manejará el Frontend


// Localización de los ficheros estaticos
app.set('appPath', 'Cap.6');
//app.use(express.static(__dirname +'/Cap.6'));
app.use(express.static(__dirname ));
app.route('*')
    .get(function(req, res) {
        res.sendFile("index.html", {"root": __dirname});
    });


// Escucha en el puerto 8080 y corre el server
app.listen(8124, function() {
    console.log('App listening on port 8124');
});