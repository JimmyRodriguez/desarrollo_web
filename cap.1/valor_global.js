/**
 * Created by Jimmy Rodriguez on 21/12/2015.
 */

var valorGlobal;

exports.setGlobal = function(val){

    valorGlobal = val;

};

exports.returnGlobal = function(){

    console.log(global);

    return valorGlobal;
}
