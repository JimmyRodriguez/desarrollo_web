/**
 * Created by Jimmy Rodriguez on 23/12/2015.
 */

//para crear un modulo en node.js, lo unico que se tiene que realizar es agregar la
//palabra reservada "exports", a todas las funciones y con eso ya se puede requerir el modulo.


//funcion original para convertir a un modulo de reconocido por NODE.JS
/*
function concatArray(str,array){

    return array.map(function(element){

        return str + ' ' + element;

    });

}
*/

//se modifico la funcion anterior para que funcione como un modulo reconible por node.js

exports.concatArray = function(str,array){

    return array.map(function(element){

            return str + ' ' + element;

    });

}
