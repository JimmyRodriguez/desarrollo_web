

var fs = require('fs');
var FileName = "hola.txt";

fs.exists(FileName, function(exists){

    if(exists){

        fs.stat(FileName, function(error, stat){

            if(error){

                throw error;

            }

            if(stat.isFile()){

                fs.readFile(FileName,'utf8', function(error,data){

                    if(error){

                        throw error;
                    }

                    console.log(data)

                });
            }

        });
    }

});



