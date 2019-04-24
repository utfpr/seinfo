module.exports = function(app) {
 
    const palestras = require('../controllers/palestra.controller.js');
  
    // Insere um Novo Evento
    app.post('/api/palestra', palestras.create);
  
    //Procura um evento pelo ID
    app.get('/api/palestra/:palestraId', palestras.findById);
  
    // Procura todos os Eventos
    app.get('/api/palestras', palestras.findAll);
  
    // Update de um Evento pelo ID (Implementar)
    app.patch('/api/palestra/:palestraId', palestras.atualiza);
  
    // Deleta um evento pelo ID
    app.delete('/api/palestra/:palestraId', palestras.delete);
  }