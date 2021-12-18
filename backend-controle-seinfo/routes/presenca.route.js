const app = require('express').Router();
const presencas = require('../controllers/presenca.controller');

app.get('/listPresenca', presencas.listPresenca);
app.get('/verificar/:idEvento/:idAtividade', presencas.verificaPresenca);
app.post('/', presencas.createPresenca);

module.exports = app;
