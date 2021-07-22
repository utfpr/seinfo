const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: ['http://localhost:8080'],
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/tmp/upload', express.static(path.join(__dirname, '/tmp/upload')));

const router = express.Router();

// Chamo todas as minhas Rotas aqui
require('./routes/evento.route')(app);
require('./routes/lote.route')(app);
require('./routes/categoria.route')(app);
require('./routes/atividade.route')(app);
require('./routes/agenda.route')(app);
require('./routes/imagem.route')(app);
require('./routes/carrossel.route')(app);
require('./routes/autenticacao.route')(app);
require('./routes/pessoa.route')(app);
require('./routes/presenca.route')(app);

app.use('/', router);

module.exports = app;
