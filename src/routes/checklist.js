const express = require('express');

const router = express.Router();
//Ferramenta utilizada para organizar as rotas

const Checklist = require('../models/checklist');

router.get('/', async (req, res) => {
    try {
        let checklist = await Checklist.find({});
        res.status(200).render('checklists/index', { checklist: checklist });
    }
    catch (error) {
        res.status(500).render('pages/error', {error: 'Erro ao exibir as Listas'});
    }
})
//Criação da rota get

router.get('/new', async (req, res) => {
    try {
        let checklist = new Checklist();
        res.status(200).render('checklists/new', {checklist: checklist})
    }
    catch (error) {
        res.status(500).render('pages/error', {errors: 'Erro ao carregar o formulario'})
    }
})

router.post('/', async (req, res) => {
    let {name} = req.body.checklist;
    let checklist = new Checklist({name});

    try {
        await checklist.save();
        res.redirect('/checklists');
    }
    catch (error) {
        res.status(422).render('checklists/new', { checklists: { ...checklist, error}})
    }

})
//Criação da rota post

router.get('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id);
        res.status(200).render('checklists/show', {checklist: checklist});
    }
    catch (error) {
        res.status(422).render('pages/error', {error: 'Erro ao exibir as Listas de tarefas'});
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