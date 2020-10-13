var http = require('http');


var server = http.createServer(function(req,res){
    console.log("Criando uma api com NodeJS");

    res.end("teste");    
});

server.listen(3000);
