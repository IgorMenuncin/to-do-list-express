const express = require('express');
//Importação do express

const app = express();
//Atribuindo express para um app

app.use(express.json());

const log = (req, res, next) => {
    console.log(req.body);
    console.log(`Data: ${Date.now()}`);
    next();
}

app.use(log);

app.get('/', (req, res) => {
    res.send('<h1>Minha lista de tarefas :)</h1>');
});
//Criando primeira rota

app.get('/json', (req, res) => {
    res.json({title: 'Tarefa X', done: true});
})
//Criando segunda rota

app.listen(3000, () => {
    console.log('Servidor foi iniciado');
})
//Ouvindo porta 3000