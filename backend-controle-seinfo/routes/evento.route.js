module.exports = function(app) {
 
  const eventos = require('../controllers/evento.controller.js');

  // Insere um Novo Evento
  app.post('/api/evento', eventos.create);

  //Procura um evento pelo ID
  app.get('/api/evento/:eventoId', eventos.findById);

  // Procura todos os Eventos
  app.get('/api/eventos', eventos.findAll);

  // Update de um Evento pelo ID (Implementar)
  app.patch('/api/evento/:eventoId', eventos.atualiza);

  // Deleta um evento pelo ID
  app.delete('/api/evento/:eventoId', eventos.delete);
}
