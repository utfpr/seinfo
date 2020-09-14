module.exports = function(app) {
 
    const pessoa = require('../controllers/pessoa.controller.js');
  
    // Insere um Novo pessoa
    app.post('/api/pessoa', pessoa.create);
  
    //Recuperar senha pelo CPF
    app.post('/api/recuperarSenha/:CPF', pessoa.recuperarSenha);
    //'/api/recuperarSenha/'+CPF
    
    //Procura um pessoa pelo CPF
    app.get('/api/pessoa/:CPF', pessoa.findById);

    // Procura todos os pessoa
    app.get('/api/pessoas', pessoa.findAll);

    //Procura se o RA ja existe no banco de dados (se a pessoa ja se cadastrou)
    app.get('/api/newpessoa/:RA',pessoa.PessoaExistente)
  
    // Update de um pessoa pelo CPF 
    app.patch('/api/pessoa/:CPF', pessoa.atualiza);
  
    // Deleta um pessoa pelo CPF
    app.delete('/api/pessoa/:CPF', pessoa.delete);

    //----------------------------------------------------------------------------
    
    //cadastra uma pessoa em um evento
    app.post('/api/inscEv/:idEvento/:CPF',pessoa.cadastrarEmEvento)

    //seleciona todos dados de pessoas inscritas em eventos
    app.get('/api/inscEv',pessoa.selectInscricaoEvento)

    //seleciona uma pessoa inscrita em um evento
    app.get('/api/inscEv/:idEvento/:CPF',pessoa.selectInscrito)

    //seleciona todas pessoas inscrita em um evento
    app.get('/api/inscEv/:idEvento',pessoa.InscricoesNoEvento)

    //seleciona os eventos que uma pessoa se inscreveu
    app.get('/api/inscEvP/:CPF',pessoa.InscricoesPessoa)

    //deleta a inscricao de uma pessoa em um evento
    app.delete('/api/inscEv/:idEvento/:CPF',pessoa.deletaInscricaoEvento)

    //-----------------------------------------------------------------------------

    //cadastra uma pessoa em uma atividade de um evento que ela se inscreveu
    app.post('/api/inscAtv/:idEvento/:CPF',pessoa.cadastrarEmAtividade)

    //seleciona todas inscricoes em atividades 
    app.get('/api/inscAtv',pessoa.selectInscricaoAtividade)

    //seleciona todas atividades que uma pessoa se inscreveu
    app.get('/api/inscAtv/:CPF',pessoa.selectInscricoesPessoa)

    //seleciona uma pessoa inscrita em uma atividade
    app.get('/api/inscAtv/:idEvento/:idAtividade/:CPF',pessoa.selectInscritoAtv)

    //seleciona todas pessoas inscritas em uma atividade especifica
    app.get('/api/inscAtv/:idEvento/:idAtividade',pessoa.selectInscricoesNaAtividade)

    //deleta inscricao de uma pessoa em uma atividade
    app.delete('/api/inscAtv/:idEvento/:idAtividade/:CPF',pessoa.deletaInscricaoAtividade)
  }
  