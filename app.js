const express = require('express');
//Importação do express

const path = require('path');
//Importacao da path

require('./config/database');
//Importando a conexao com o mongoDB

const checkListRouter = require('./src/routes/checklist');
//Importando a rota

const rootRouter = require ('./src/routes/index');
//Importando rota das views

const app = express();
//Atribuindo express para um app

app.use(express.json());
//Usando middlewares para receber json

app.use(express.urlencoded({extended: true}));

// app.get('/', (req, res) => {

//     res.send('<h1>Minha lista de tarefas :)</h1>');
// });
//Criando primeira rota

app.use(express.static(path.join(__dirname, 'public')));
//os arquivos estaticos irao ficar na pasta public

app.set('views', path.join(__dirname, 'src/views'));
//junção do diretorio atual com o diretorio das views

app.set('view engine', 'ejs');
//dizendo ao express que a view engine sera o ejs

app.use('/checklists',checkListRouter);
//utilizando a rota criada e nomeando a como checklists

app.use('/', rootRouter);
//utilizando a rota criada

app.listen(3000, () => {
    console.log('Servidor foi iniciado');
})
//Ouvindo porta 3000