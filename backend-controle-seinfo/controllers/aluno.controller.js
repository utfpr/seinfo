const db = require('../config/db.config.js');
const Aluno = db.alunos;
const Pessoa = db.pessoas;
 var id_pk = -1;
// Post do Aluno
exports.create = (req, res) => {
  Pessoa.create({  
    nome: req.body.nome_aluno,
    email: req.body.email_aluno,
    CPF: req.body.cpf_aluno,

  }).then(pessoa => {    
    
    console.log("Criado a Pessoa!");
    id_pk = pessoa.idPessoa;
    res.send(pessoa);

    /*
        Depois de Criado a pessoa eu crio o aluno logo abaixo
        passando o id_pk que será a nossa FK;
    */
    Aluno.create({  
      
      RA: req.body.ra_aluno,
      senha: req.body.senha_aluno,
      idPessoa: id_pk,
  
  
    }).then(evento => {    
      console.log("Criado o Aluno!")
      res.send(evento);
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
    
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })

};

    /* 
        Função de Teste
    */
  exports.amoeba = (req, res) => {
    console.log("Função de Teste de Aluno");

  };
