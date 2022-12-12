const mongoose = require('mongoose');
//importando o mongoose

const checklistSchema = mongoose.Schema({
    name: {type: String, required: true},
    //criação do field name, type = tipo de dados, required: true = obrigatorio
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        //indicando a ligação com as tasks, como um checklist terá mais de uma task, esse field precisa ser um array
        ref: 'Task'
        //referenciando com o model task
    }]
})
//schema é o modelo de dados que vamos utilizar no nosso documento

module.exports = mongoose.model('Checklist', checklistSchema);
//exportando o modulo com o nome checklist