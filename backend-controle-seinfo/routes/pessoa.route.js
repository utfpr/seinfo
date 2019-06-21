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
    
    app.post('/api/inscEv/:idEvento/:idPessoa',pessoa.cadastrarEmEvento)

    app.get('/api/inscEv',pessoa.selectInscricaoEvento)

    app.get('/api/inscEv/:idEvento/:idPessoa',pessoa.selectInscrito)

    app.get('/api/inscEv/:idEvento',pessoa.InscricoesNoEvento)

    app.get('/api/inscEv/:idPessoa',pessoa.InscricoesPessoa)

    app.delete('/api/inscEv/:idEvento/:idPessoa',pessoa.deletaInscricaoEvento)

    //-----------------------------------------------------------------------------

    app.post('/api/inscAtv/:idEvento/:idPessoa',pessoa.cadastrarEmAtividade)

    app.get('/api/inscAtv',pessoa.selectInscricaoAtividade)

    app.get('/api/inscAtv/:idPessoa',pessoa.selectInscricoesPessoa)

    app.get('/api/inscAtv/:idEvento/:idAtividade/:idPessoa',pessoa.selectInscritoAtv)

    app.get('/api/inscAtv/:idEvento/:idAtividade',pessoa.selectInscricoesNaAtividade)

    app.delete('/api/inscAtv/:idEvento/:idAtividade/:idPessoa',pessoa.deletaInscricaoAtividade)
  }
  