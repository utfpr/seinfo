const agendas = require('../controllers/agenda.controller');
const app = require('express').Router();

// Insere uma nova Agenda
app.post('/', agendas.create);

// Procura um agendamento pelo ID
app.get('/:agendaId', agendas.findById);

// Procura todos os agendamentos
app.get('/', agendas.findAll);

// Update de um agendamento pelo ID
app.patch('/:agendaId', agendas.atualiza);

// Deleta um agendamento pelo ID
app.delete('/:agendaId', agendas.delete);

module.exports = app;
