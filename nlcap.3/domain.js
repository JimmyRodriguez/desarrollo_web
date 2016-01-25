/**
 * Created by idtdev2 on 12/30/15.
 */

//la variable domain declarda utiliza el modulo domain, y tiene 2 metodos muy interesantes
// el metodo run que ejectuta la funcion en caso de que la funcion no encuentre o realice 
// la tarea de manera correcta esta captura el el error a traves de un evento y se lo pasa
// al metodo ON para que trata al erro de manera correcta.


var fs = require('fs');
var domain = require('domain').create(); //crea el domain que se utilizara para capturar los errores
var filename = "hola2.txt";


domain.run(function(){ //el metodo run se utiliza para ejecutar la funcion que se va a ingresa y si todo esta bien e

			//el metodo dispose destruye los objetos

    fs.readFile(filename,'utf8',function(error,data){

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
