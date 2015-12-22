/**
 * Created by Jimmy Rodriguez on 21/12/2015.
 */

process.stdin.resume();

process.stdin.on('data',function(chunk){

   process.stdout.write('data: ' + chunk);

});


