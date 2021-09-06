const app = require('express').Router();
const categorias = require('../controllers/categoria.controller');

// Insere uma nova categoria
app.post('/', categorias.create);
// /api/categoria

// Procura uma categoria pelo ID
app.get('/:categoriaId', categorias.findById);
// /api/categoria/:categoriaId

// Procura todos as categorias
app.get('/', categorias.findAll);
// /api/categoria

// seleciona todas atividades de uma categoria especifica
app.get('/atividades/:idCategoria', categorias.AtividadesCategoria);
// /api/categoria/atividades/:idCategoria

// Update de uma categoria pelo ID
app.patch('/:categoriaId', categorias.atualiza);
// /api/categoria/:categoriaId

// Deleta uma categoria pelo ID
app.delete('/:categoriaId', categorias.delete);
// /api/categoria/:categoriaId

module.exports = app;
