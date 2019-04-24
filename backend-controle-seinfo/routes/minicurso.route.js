module.exports = function(app) {
 
    const minicursos = require('../controllers/minicurso.controller.js');
  
    // Insere um Novo Evento
    app.post('/api/minicurso', minicursos.create);
  
    //Procura um evento pelo ID
    app.get('/api/minicurso/:minicursoId', minicursos.findById);
  
    // Procura todos os Eventos
    app.get('/api/minicursos', minicursos.findAll);
  
    // Update de um Evento pelo ID (Implementar)
    app.patch('/api/minicurso/:minicursoId', minicursos.atualiza);
  
    // Deleta um evento pelo ID
    app.delete('/api/minicurso/:minicursoId', minicursos.delete);
  }
  