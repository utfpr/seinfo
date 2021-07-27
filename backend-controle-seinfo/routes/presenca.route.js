const presencas = require('../controllers/presenca.controller');
const app = require('express').Router();

app.get('/listPresenca', presencas.listPresenca);

module.exports = app;
