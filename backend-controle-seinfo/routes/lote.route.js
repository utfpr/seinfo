module.exports = function (app) {
  const lotes = require('../controllers/lote.controller.js');

  // Insere um Novo lote
  app.post('/api/lote', lotes.create);

  // Procura um lote pelo ID
  app.get('/api/lote/:loteId',lotes.findById);

  // Procura todos os lotes
  app.get('/api/lotes', lotes.findAll);

  // Procura todos os Lotes de um evento pelo ID
  app.get('/api/loteEvento/:idEvento', lotes.loteEvento);

  // Update de um lote pelo ID
  app.patch('/api/lote/:loteId', lotes.atualiza);

  // Deleta um lote pelo ID
  app.delete('/api/lote/:loteId', lotes.delete);
};
