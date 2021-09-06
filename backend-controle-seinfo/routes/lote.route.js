const app = require('express').Router();
const lotes = require('../controllers/lote.controller');

// Insere um Novo lote
app.post('/', lotes.create);
// /api/lote

// Procura um lote pelo ID
app.get('/:loteId', lotes.findById);
// /api/lote/:loteId

// Procura todos os lotes
app.get('/', lotes.findAll);
// /api/lote

// Procura todos os Lotes de um evento pelo ID
app.get('/evento/:idEvento', lotes.loteEvento);
// /api/lote/evento/:idEvento

// Update de um lote pelo ID
app.patch('/:loteId', lotes.atualiza);
// /api/lote/:loteId

// Deleta um lote pelo ID
app.delete('/:loteId', lotes.delete);
// /api/lote/:loteId

module.exports = app;
