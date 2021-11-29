const app = require('express').Router();
const presencas = require('../controllers/presenca.controller');

app.get('/listPresenca', presencas.listPresenca);

app.post('/', presencas.createPresenca);

module.exports = app;
