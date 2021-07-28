const app = require('express').Router();

// controllers
const login = require('../../controllers/autenticacao.controller');
const carrossel = require('../../controllers/carrossel.controller');
const eventos = require('../../controllers/evento.controller');
const atividades = require('../../controllers/atividade.controller');
const pessoa = require('../../controllers/pessoa.controller');

// ROTAS --------------------------------------------------------------

// login
app.post('/autentication/', login.autenticar);
app.post('/login/', login.login);
app.post('/loginLDAP/', login.loginLDAP);

// slide/carrossel
app.get('/getAllCarrosselAvailables', carrossel.showAllAvailables);

// eventos
app.get('/getAllAvailableEvents', eventos.getAllAvailableEvents);
app.get('/evento/:idEvento', eventos.findById);
app.get('/evento', eventos.findAll);

// Atividades
app.get('/atividades', atividades.findAll);
app.get('/atividade/:idEvento', atividades.AtividadeEvento);
app.get('/atividade/:idAtividade/:idEvento', atividades.findById);

// PESSOA
app.post('/recuperarSenha/:CPF', pessoa.recuperarSenha);
app.post('/pessoa', pessoa.create);
module.exports = app;
