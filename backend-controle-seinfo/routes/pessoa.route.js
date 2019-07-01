module.exports = function(app) {
 
    const pessoa = require('../controllers/pessoa.controller.js');
  
    // Insere um Novo pessoa
    app.post('/api/pessoa', pessoa.create);
  
    //Procura um pessoa pelo ID
    app.get('/api/pessoa/:idPessoa', pessoa.findById);

    // Procura todos os pessoa
    app.get('/api/pessoas', pessoa.findAll);
  
    // Update de um pessoa pelo ID 
    app.patch('/api/pessoa/:idPessoa', pessoa.atualiza);
  
    // Deleta um pessoa pelo ID
    app.delete('/api/pessoa/:idPessoa', pessoa.delete);

    //----------------------------------------------------------------------------
    
    //cadastra uma pessoa em um evento
    app.post('/api/inscEv/:idEvento/:idPessoa',pessoa.cadastrarEmEvento)

    //seleciona todos dados de pessoas inscritas em eventos
    app.get('/api/inscEv',pessoa.selectInscricaoEvento)

    //seleciona uma pessoa inscrita em um evento
    app.get('/api/inscEv/:idEvento/:idPessoa',pessoa.selectInscrito)

    //seleciona todas pessoas inscrita em um evento
    app.get('/api/inscEv/:idEvento',pessoa.InscricoesNoEvento)

    //seleciona os eventos que uma pessoa se inscreveu
    app.get('/api/inscEvP/:idPessoa',pessoa.InscricoesPessoa)

    //deleta a inscricao de uma pessoa em um evento
    app.delete('/api/inscEv/:idEvento/:idPessoa',pessoa.deletaInscricaoEvento)

    //-----------------------------------------------------------------------------

    //cadastra uma pessoa em uma atividade de um evento que ela se inscreveu
    app.post('/api/inscAtv/:idEvento/:idPessoa',pessoa.cadastrarEmAtividade)

    //seleciona todas inscricoes em atividades 
    app.get('/api/inscAtv',pessoa.selectInscricaoAtividade)

    //seleciona todas atividades que uma pessoa se inscreveu
    app.get('/api/inscAtv/:idPessoa',pessoa.selectInscricoesPessoa)

    //seleciona uma pessoa inscrita em uma atividade
    app.get('/api/inscAtv/:idEvento/:idAtividade/:idPessoa',pessoa.selectInscritoAtv)

    //seleciona todas pessoas inscritas em uma atividade especifica
    app.get('/api/inscAtv/:idEvento/:idAtividade',pessoa.selectInscricoesNaAtividade)

    //deleta inscricao de uma pessoa em uma atividade
    app.delete('/api/inscAtv/:idEvento/:idAtividade/:idPessoa',pessoa.deletaInscricaoAtividade)
  }
  