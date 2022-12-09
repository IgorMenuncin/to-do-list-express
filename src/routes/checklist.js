const express = require('express');

const router = express.Router();
//Ferramenta utilizada para organizar as rotas

router.get('/', (req, res) => {
    console.log('Ola');
    res.send();
})
//Criação da rota get

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body);
})
//Criação da rota post

router.get('/:id', (req, res) => {
    console.log(req.params);
    res.send(`ID: ${req.params.id}`);
})
//Criação de rota get com parametros

module.exports = router;
//Exportando o router criado