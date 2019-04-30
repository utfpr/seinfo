module.exports = function(app) {
 
    const lotes = require('../controllers/lote.controller.js');
  
    // Insere um Novo Evento
    app.post('/api/lote', lotes.create);
  
    //Procura um evento pelo ID
    app.get('/api/lote/:loteId', lotes.findById);
  
    // Procura todos os Eventos
    app.get('/api/lotes', lotes.findAll);
  
    // Update de um Evento pelo ID (Implementar)
    app.patch('/api/lote/:loteId', lotes.atualiza);
  
    // Deleta um evento pelo ID
    app.delete('/api/lote/:loteId', lotes.delete);
  }
  