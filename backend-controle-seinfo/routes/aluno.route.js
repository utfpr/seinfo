module.exports = function(app) {
 
    const aluno = require('../controllers/aluno.controller.js');

    // Procura todos os alunos
    app.get('/api/alunos', aluno.findAll);
    app.get('/api/aluno/:alunoId',aluno.findById);
    app.patch('/api/aluno/:pessoaId',aluno.atualiza);
    app.post('/api/aluno', aluno.create);
    app.delete('/api/aluno/:pessoaId',aluno.delete);
  

  }