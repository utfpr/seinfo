module.exports = function (app) {

  const atividades = require('../controllers/atividade.controller.js');

  // Insere uma atividade
  app.post('/api/atividade', atividades.create);

  //Procura uma atividade pelo id
  app.get('/api/atividade/:idAtividade/:idEvento', atividades.findById);

  // Procura todas as atividades
  app.get('/api/atividades', atividades.findAll);

  //seleciona as atividades de um evento especifico
  app.get('/api/atividade/:idEvento', atividades.AtividadeEvento);

  // Update de uma atividade pelo ID 
  app.patch('/api/atividade/:idAtividade', atividades.atualiza);

  // Deleta uma atividade pelo ID
  app.delete('/api/atividade/:idAtividade/:idEvento', atividades.delete);

  //-------------------------------------------------------------------------

  //define um protagnoista de uma atividade
  app.post('/api/protagonista/:idAtividade/:CPF', atividades.criarProtagonista);

  //seleciona todos protagonistas
  app.get('/api/protagonistas', atividades.selectProtagonista);

  //seleciona um protagonista de uma atividade
  app.get('/api/protagonistas/:idAtividade/:CPF', atividades.selectUmProtagonista);

  //seleciona todos protagonistas de uma atividade
  app.get('/api/protagonistaP/:idAtividade', atividades.ProtagonistasDaAtv);

  //seleciona as atividades que uma pessoa é protagonista
  app.get('/api/protagonistaA/:CPF', atividades.AtividadesDoProtagonista);

  //deleta um protagonista de uma atividade
  app.delete('/api/protagonista/:idAtividade/:CPF', atividades.deletaProtagonista);
};
