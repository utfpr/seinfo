const app = require('express').Router();
const presencas = require('../controllers/presenca.controller');

app.get('/listPresenca', presencas.listPresenca);

module.exports = app;
