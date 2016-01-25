/**
 * Created by jimmy on 25/01/16.
 */

	//la variable filename se ingres en el fs.readfile donde las comillas

var fs = require('fs');
var Filename = "hola.txt";


try{
    fs.readFile("","utf8",function(error,data){

        if(error){
            throw error;
        }

        console.log(data);


    });

}catch (exception){

    console.log("the exception was caugth");

}
