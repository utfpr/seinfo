const db = require('../config/db.config.js');
const Convidado = db.convidados;
const Pessoa = db.pessoas;
 var id_pk = -1;
// Post do Aluno
exports.create = (req, res) => {
  Pessoa.create({  
    nome: req.body.nome_convidado,
    email: req.body.email_convidado,
    CPF: req.body.cpf_convidado,

  }).then(pessoa => {    
    
    console.log("Criado a Pessoa!");
    console.log("ID: "+id_pk);
    //res.send(pessoa);

    /*
        Depois de Criado a pessoa eu crio o convidado logo abaixo
        passando o id_pk que será a nossa FK;
    */
   Convidado.create({  
    
      senha: req.body.senha_convidado,
      idPessoa: pessoa.idPessoa,
  
  
    }).then(evento => {    
      console.log("Criado o Convidado!")
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

/*

exports.findById=(req,res)=>{
  Aluno.findByPk(req.params.alunoId).then(aluno => {
    console.log("Achou o aluno pelo ID "+req.params.alunoId);
    res.send(aluno); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
},

exports.findAll=(req,res)=>{
  Aluno.findAll({ raw: true}).then(aluno => {
    console.log("Listou Todos os alunos!");
    res.send(aluno); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
},

exports.atualiza=(req,res)=>{
  Pessoa.update({
    nome: req.body.nome_aluno,
    email: req.body.email_aluno,
    CPF: req.body.cpf_aluno,
  },{where :{idPessoa: req.params.pessoaId}}).then(aluno =>{
    Aluno.update(
      {RA: req.body.ra_aluno,
        senha: req.body.senha_aluno,
    },
      {where: {RA: req.body.ra_aluno, idPessoa: req.params.pessoaId}}).then(aluno=>{
        console.log("Atualizando aluno");
        res.send(aluno);
      }).catch(err=>{
        res.sendStatus(500).send("Error "+err);
      })
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
  
},

exports.delete=(req,res)=>{
 
    Aluno.destroy({where: {idPessoa: req.params.pessoaId, RA: req.body.ra_aluno}}).then(aluno=>{
      Pessoa.destroy({ where: { idPessoa: req.params.pessoaId } }).then(pessoa => {
        console.log("Deletando o pessoa com o ID: "+req.params.pessoaId);
        res.send(pessoa); //Retorna um Json para a Pagina da API
      }).catch(err => {
        res.status(500).send("Error -> " + err);
      })
      console.log("Deletando o aluno com o ID: "+req.params.ra_aluno);
    res.send(aluno);
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })

}

*/