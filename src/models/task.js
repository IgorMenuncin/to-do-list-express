const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
//Criação do taskSchema, formato de como sera a task
    name: {type: String, required: true},
    //field name, tipo: string e obrigatorio
    done: {type: Boolean, default: false},
    // field done, tipo boolean e por padrão virá falso
    checklist: {
    // field checklist, tipo ObjectId, referencia: model Checklist e obrigatorio
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Checklist',
        required: true
    }
})

module.exports = mongoose.model('Task', taskSchema);
//exportando o modulo com o nome task