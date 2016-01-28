/**
 * Created by jimmy rodriguez on 12/30/15.
 */


var fs = require('fs');  //modulo que carga el sistema de archivos "file system"
var FileName = "hola.txt";   


//--------------cbReadFile------------------------------

function cbReadFile(error,data){

    if(error){

        throw error;
    }

    console.log(data);
}


//------------------cbStat------------------------------


function cbStat(error,stats){

    if(error){

        throw error;
    }

    if(stats.isFile()){

        fs.readFile(FileName,'utf8',cbReadFile());

    }
}


//-------------------cbExists-----------------------------

function cbExists(exists){

    if(exists){

        fs.stat(FileName, cbStat);
    }

}

//----------


fs.exists(FileName,cbExists)




