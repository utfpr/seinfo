const express = require('express');
const path = require('path');
const cors = require('cors');
// require('dotenv').config({ path: './.env' });

const auth = require('./auth');

const agenda = require('./routes/agenda.route');

const app = express();

app.use(
  cors({
    origin: ['http://localhost:8080'],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = express.Router();
app.use(auth);

// Chamo todas as minhas Rotas aqui
require('./routes/evento.route')(app);
require('./routes/lote.route')(app);
require('./routes/categoria.route')(app);
require('./routes/atividade.route')(app);
require('./routes/imagem.route')(app);
require('./routes/carrossel.route')(app);
require('./routes/autenticacao.route')(app);
require('./routes/pessoa.route')(app);
require('./routes/presenca.route')(app);

app.use('/api/agendas', agenda);

app.use('/', router);

module.exports = app;
