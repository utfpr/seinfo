module.exports = function(app) {
 
    const aluno = require('../controllers/aluno.controller.js');

    // Procura todos os alunos
    app.get('/api/alunos', aluno.amoeba);

    app.post('/api/aluno', aluno.create);
  

  }