module.exports = function(app) {
 
  const atividades = require('../controllers/atividade.controller.js');

  // Insere uma atividade
  app.post('/api/atividade', atividades.create);

  //Procura uma atividade pelo id
  app.get('/api/atividade/:idAtividade/:idEvento', atividades.findById);

  // Procura todas as atividades
  app.get('/api/atividades', atividades.findAll);

  app.get('/api/atividade/:idEvento',atividades.AtividadeEvento);

  // Update de uma atividade pelo ID 
  app.patch('/api/atividade/:idAtividade', atividades.atualiza);

  // Deleta uma atividade pelo ID
  app.delete('/api/atividade/:idAtividade/:idEvento', atividades.delete);

  //-------------------------------------------------------------------------

  app.post('/api/protagonista/:idAtividade/:idPessoa',atividades.criarProtagonista);

  app.get('/api/protagonistas',atividades.selectProtagonista);

  app.get('/api/protagonistas/:idAtividade/:idPessoa',atividades.selectUmProtagonista);

  app.get('/api/protagonistas/:idAtividade',atividades.ProtagonistasDaAtv);

  app.get('/api/protagonistas/:idPessoa',atividades.AtividadesDoProtagonista);

  app.delete('/api/protagonista/:idAtividade/:idPessoa',atividades.deletaProtagonista);
}
