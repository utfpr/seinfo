module.exports = function(app) {
 
    const eventoImagem = require('../controllers/eventoImagem.controller.js');
  
    // Insere uma nova categoria
    app.post('/api/eventoImagem', eventoImagem.create);
  
    // Procura todos as categorias
    app.get('/api/eventoImagem', eventoImagem.findAll);
  
}