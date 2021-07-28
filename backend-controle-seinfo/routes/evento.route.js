const eventos = require('../controllers/evento.controller');

module.exports = (app) => {
  // Insere um Novo Evento
  app.post('/api/evento', eventos.create);

  // Procura um evento pelo ID public
  // app.get('/api/evento/:idEvento', eventos.findById);

  // Procura todos os Eventos PUBLIC
  // app.get('/api/evento', eventos.findAll);

  // todos eventos disponiveis
  app.post('/api/eventosD', eventos.getAllEventosCPF);

    // receitas de um evento
  app.get('/api/eventoReceita/:idEvento', eventos.EvReceita);

  // receita de inscricoes no evento
  app.get('/api/eventoRecInsc/:idEvento', eventos.RecInEv);

  // despesas de um evento pelo ID
  app.get('/api/eventoDespesa/:idEvento', eventos.DespEv);

  // Update de um Evento pelo ID (Implementar)
  app.patch('/api/evento/:idEvento', eventos.atualiza);

  // Deleta um evento pelo ID
  app.delete('/api/evento/:idEvento', eventos.delete);

  //----------------------------------------------------------------------

  // definir organizador para evento
  app.post('/api/organizacao/:idEvento/:CPF', eventos.criaOrganizacao);

  // seleciona todos dados na tabela organizacao
  app.get('/api/organizacoes', eventos.selectOrganizacao);

  // seleciona um organizador em especifico
  app.get('/api/organizacoes/:idEvento/:CPF', eventos.selectUmOrganizador);

  // seleciona os organizadores de um evento
  app.get('/api/organizacoesE/:idEvento', eventos.selectOrganizacaoEvento);

  // seleciona os eventos em que uma pessoa é organizador
  app.get('/api/organizacoesP/:CPF', eventos.selectEventoOrganizador);

  // deleta uma linha organizador
  app.delete('/api/organizacao/:idEvento/:CPF', eventos.deleteOrganizacao);
};
