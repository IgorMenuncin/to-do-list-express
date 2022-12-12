const express = require('express');

const router = express.Router();
//Ferramenta utilizada para organizar as rotas

const Checklist = require('../models/checklist');

router.get('/', async (req, res) => {
    try {
        let checklist = await Checklist.find({});
        res.status(200).json(checklist);
    }
    catch (error) {
        res.status(500).json(error);
    }
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

router.get('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id);
        res.status(200).json(checklist);
    }
    catch (error) {
        res.status(422).json(error)
    }
})
//Criação de rota get com parametro de id

router.put('/:id', async (req, res) => {
    let {name} = req.body;
    try {
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, {name}, {new: true});
        // id do que sera atualizado, o que seraw atualizado e o new: true é para na hora de devolver ele devolver o novo objeto, ou seja, o obj com os novos valores
        res.status(200).json(checklist);
    } catch (error) {
        res.status(422).json(error);
    }
})
//Criação de rota put com parametro de id

router.delete('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findByIdAndRemove(req.params.id);
        res.status(200).json(checklist);
    } catch (error) {
        res.status(422).json(error);
    }
})
//Criação de rota delete com parametro de id

module.exports = router;
//Exportando o router criado