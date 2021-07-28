const express = require('express');
const path = require('path');
const cors = require('cors');
// require('dotenv').config({ path: './.env' });

// Require dos arquivos com as rotas
const auth = require('./auth');
const agenda = require('./routes/agenda.route');
const publicRoutes = require('./routes/public/public.route');
const presenca = require('./routes/presenca.route');
const carrossel = require('./routes/carrossel.route');
const lote = require('./routes/lote.route');
const categoria = require('./routes/categoria.route');

// Chamada do express
const app = express();
const router = express.Router();

// cors
app.use(
  cors({
    origin: ['http://localhost:8080'],
  })
);

// padrao
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/tmp/upload', express.static(path.join(__dirname, '/tmp/upload')));

// middleware de autenticacao para rotas privadas /api/
app.use('/api', auth);
// Chamo todas as minhas Rotas aqui
require('./routes/evento.route')(app);
require('./routes/atividade.route')(app);
require('./routes/pessoa.route')(app);

app.use('/api/agendas', agenda);
app.use('/api/presenca', presenca);
app.use('/api/carrossel', carrossel);
app.use('/api/lote', lote);
app.use('/api/categoria', categoria);
app.use('/public', publicRoutes);

// Expirar login (O token já está fazendo isso)
// require('./routes/autenticacao.route')(app);

app.use('/', router);
module.exports = app;
