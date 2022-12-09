const express = require('express');
//Importação do express

const checkListRouter = require('./src/routes/checklist');
//Importando a rota

const app = express();
//Atribuindo express para um app

app.use(express.json());
//Usando middlewares para receber json

// app.get('/', (req, res) => {

//     res.send('<h1>Minha lista de tarefas :)</h1>');
// });
//Criando primeira rota

app.use('/checklists',checkListRouter);
//utilizando a rota criada e nomeando a como checklists

app.listen(3000, () => {
    console.log('Servidor foi iniciado');
})
//Ouvindo porta 3000