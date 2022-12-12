const express = require('express');

const router = express.Router();
//Ferramenta utilizada para organizar as rotas

const Checklist = require('../models/checklist');

router.get('/', (req, res) => {
    console.log('Ola');
    res.send();
})
//Criação da rota get

router.post('/', async (req, res) => {
    let {name} = req.body;

    try {
        let checklist = await Checklist.create({ name });
        res.status(200).json(checklist);
    }
    catch (error) {
        res.status(422).json(error);
    }

})
//Criação da rota post

router.get('/:id', (req, res) => {
    console.log(req.params);
    res.send(`ID: ${req.params.id}`);
})
//Criação de rota get com parametro de id

router.put('/:id', (req, res) => {
    console.log(req.body);
    console.log("rota put acionada");
    res.send(`PUT ID: ${req.params.id}`);
})
//Criação de rota put com parametro de id

router.delete('/:id', (req, res) => {
    console.log(req.body);
    console.log("rota delete acionada");
    res.send(`DELETE ID: ${req.params.id}`);
})
//Criação de rota delete com parametro de id

module.exports = router;
//Exportando o router criado