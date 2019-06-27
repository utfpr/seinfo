module.exports = function(app) {
 
  const categorias = require('../controllers/categoria.controller.js');

  // Insere uma nova categoria
  app.post('/api/categoria', categorias.create);

  //Procura uma categoria pelo ID
  app.get('/api/categoria/:categoriaId', categorias.findById);

  // Procura todos as categorias
  app.get('/api/categorias', categorias.findAll);

  //seleciona todas atividades de uma categoria especifica
  app.get('/api/cateAtv/:idCategoria',categorias.AtividadesCategoria);

  // Update de uma categoria pelo ID
  app.patch('/api/categoria/:categoriaId', categorias.atualiza);

  // Deleta uma categoria pelo ID
  app.delete('/api/categoria/:categoriaId', categorias.delete);
}