/**
 * Created by user on 20/12/2015.
 */

var http = require('http');

http.createServer(function(req, res){

    res.writeHead(200, {'Content-type':'text/html'});

    res.end('Hola, Mundo');



}).listen(process.env.PORT || 8182);
