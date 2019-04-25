module.exports = function(app) {
 
    const convidado = require('../controllers/convidado.controller.js');

    // Procura todos os alunos
    //app.get('/api/alunos', convidado.findAll);
    //app.get('/api/aluno/:alunoId',convidado.findById);
    //app.patch('/api/aluno/:alunoId',convidado.atualiza);
    app.post('/api/convidado', convidado.create);
    //app.delete('/api/aluno/:pessoaId',convidado.delete);
  

  }