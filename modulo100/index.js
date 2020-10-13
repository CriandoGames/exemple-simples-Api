
const express = require('express');

const server = express();

server.use(express.json());

//QUery params = ?nome=NodeJS
//Routes Params = /curso/2
//Request Body = {nome : "NodeJS", Idade : "28"}

const cursos = ['Node JS', 'JavaScript', "Flutter"];


//middleWare
function CheckCurso(req, res, next) {
    if (!req.body.name) {
        return res.status(400).json({ error: "Nome do curso é obrigatorio" })
    }
    return next();
};

function CheckIndexCurso(req, res, next) {
    if (!cursos[req.params.index]) {
        return res.status(400).json({ error: "Index não existe" })
    }

    return next();
}

//localhost:3000/curso    //server.get('/curso',// sem parametro para usar com Query Params
server.get('/cursos/:index', CheckIndexCurso, (req, res) => {

    //Query Params
    // const nome = req.query.nome;
    //return res.json({curso: `Apredendo ${nome}`})


    //Route Params 
    //const id = req.params.id;
    // return res.json({curso: `Apredendo ${id}`});
    const { index } = req.params;
    return res.json(cursos[index]);

});

//Criando CRUD
server.get('/cursos', (req, res) => {

    return res.json(cursos);

});

server.post('/cursos', CheckCurso, (req, res) => {

    //criando uma constante e um paramentro de respota name do tipo json
    const { name } = req.body;

    //adicionar um elemento no array
    cursos.push(name);

    // retornando uma lista
    return res.json(cursos);

});

//atualizando um curso
server.put('/cursos/:index', CheckCurso, CheckIndexCurso, (req, res) => {

    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);

});


server.delete('/cursos/:index', CheckIndexCurso, (req, res) => {

    const { index } = req.params;

    cursos.splice(index, 1);

    return res.json(cursos);

});




server.listen(3000);
