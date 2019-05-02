module.exports = function(app) {
 
    const agendas = require('../controllers/agenda.controller.js');
  
    // Insere uma nova Agenda
    app.post('/api/agenda', agendas.create);
  
    //Procura um agendamento pelo ID
    app.get('/api/agenda/:agendaId', agendas.findById);
  
    // Procura todos os agendamentos
    app.get('/api/agendas', agendas.findAll);
  
    // Update de um agendamento pelo ID 
    app.patch('/api/agenda/:agendaId', agendas.atualiza);
  
    // Deleta um agendamento pelo ID
    app.delete('/api/agenda/:agendaId', agendas.delete);
  }
  