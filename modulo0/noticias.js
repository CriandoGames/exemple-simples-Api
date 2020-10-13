var http = require('http');


var server = http.createServer(function (req, res) {
    console.log("Criando uma api com NodeJS");

    var categoria = req.url;

    if (categoria == '/tecnolgia') {
        res.end("tecnolgia");
    } else if (categoria == '/moda') {

        res.end("moda");

    } else {
        res.end("pagina sem categoria");
    }


});

server.listen(3000);
