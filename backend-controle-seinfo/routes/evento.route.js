module.exports = function(app) {
 
  const eventos = require('../controllers/evento.controller.js');

  // Insere um Novo Evento
  app.post('/api/evento', eventos.create);

  //Procura um evento pelo ID
  app.get('/api/evento/:eventoId', eventos.findById);

  // Procura todos os Eventos
  app.get('/api/eventos', eventos.findAll);

  // Update a Customer with ID
  //app.put('/api/evento/:eventoId', customers.update);

  // Deleta um evento pelo ID
  app.delete('/api/evento/:eventoId', eventos.delete);
}
