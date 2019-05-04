module.exports = function(app) {
 
    const imagens = require('../controllers/imagem.controller.js');
  
    // Insere uma nova Imagem
    app.post('/api/imagem', imagens.create);
  
    //Procura uma imagem pelo ID
    app.get('/api/imagem/:imagemId', imagens.findById);
  
    // Procura todas as imagens
    app.get('/api/imagens', imagens.findAll);
  
    // Update de uma imagem
    app.patch('/api/imagem/:imagemId', imagens.atualiza);
  
    // Deleta uma imagem pelo ID
    app.delete('/api/imagem/:imagemId', imagens.delete);
  }
  