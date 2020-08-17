const db = require("../models/index.js");
const Pessoa = db.pessoa;

// Post do Atividade
exports.create = (req, res) => {
  Pessoa.create({
    idPessoa: /*"usuario" + */req.body.RA,
    nome: req.body.nome,
    email: req.body.email,
    CPF: req.body.cpf,
    senha: req.body.senha,
    nivel: req.body.nivel,
    classificacao: req.body.classificacao
  })
    .then(pessoa => {
      console.log("Criado uma Pessoa!");
      res.send(pessoa);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });

    var nodemailer = require('nodemailer');

    var remetente = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      service: 'smtp.gmail.com',
      port: 587,
      secure: true,
      auth:{
        user: 'emailseinfo@gmail.com',
        pass: 'bcc34falunos' }
    });
    var emailConfCadastro = {
      from: 'emailseinfo@gmail.com',
      to: Pessoa.email,
      subject: 'Confirmação de cadastro Seinfo',
      text: 'Você está recebendo este email para confirmar seu cadastro no evento Seinfo.',
    };
    remetente.sendMail(emailConfCadastro, function(error){
      if (error) {
        console.log(error);
      } else {
        console.log('Email enviado com sucesso.');
      }
    });
};

exports.findById = (req, res) => {
  Pessoa.findOne({ where: { idPessoa: req.params.idPessoa } })
    .then(pessoa => {
      console.log("Achou uma Pessoa pelo ID " + req.params.idPessoa);
      res.send(pessoa); //Retorna um Json para a Pagina da API
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

exports.findAll = (req, res) => {
  Pessoa.findAll()
    .then(pessoa => {
      console.log("Listou Todas as Pessoas!");
      res.send(pessoa); //Retorna um Json para a Pagina da API
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

exports.atualiza = (req, res) => {
  Pessoa.update(
    {
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha
    },
    { where: { idPessoa: req.params.idPessoa } }
  )
    .then(pessoa => {
      console.log("Atualizando uma Pessoa");
      res.send(pessoa);
    })
    .catch(err => {
      res.status(500).send("Error " + err);
    });
};

exports.delete = (req, res) => {
  Pessoa.destroy({ where: { idPessoa: req.params.idPessoa } })
    .then(pessoa => {
      console.log("Deletando uma Pessoa com o ID: " + req.params.idPessoa);
      res.send(pessoa); //Retorna um Json para a Pagina da API
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

exports.PessoaExistente=(req,res)=>{
  Pessoa.findOne({where:{idPessoa: req.params.RA}}).then(pessoa=>{
    if (pessoa){
      res.send(true)
    }
    else{
      res.send(false)
    }
    //return true
  }).catch(err=>{
    res.status(500).send(err)
    //return false
  })
}

//----------------------------------------------------------------------------------------------------

exports.cadastrarEmEvento = (req, res) => {
  Pessoa.findOne({ where: { idPessoa: req.params.idPessoa } }).then(pessoa => {
    db.evento
      .findOne({ where: { idEvento: req.params.idEvento } })
      .then(evento => {
        db.inscricaoEvento
          .create({
            dataInscricao: req.body.dataInscricao,
            idEvento: evento.idEvento,
            idPessoa: pessoa.idPessoa
          })
          .then(inscriEv => {
            res.send(inscriEv);
          }).catch(err => {
            res.status(500).send("Error -> " + err);
          });
      });
  });
};

exports.deletaInscricaoEvento = (req, res) => {
  db.inscricaoEvento
    .destroy({
      where: { idEvento: req.params.idEvento, idPessoa: req.params.idPessoa }
    })
    .then(delteInsc => {
      res.send("deletou");
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

exports.selectInscricaoEvento = (req, res) => {
  //seleciona todos inscritos em todos eventos
  db.inscricaoEvento.findAll({include:[{model:db.pessoa,as:'pessoaInsc'},{model:db.evento,as:'eventoInsc'}]}).then(pessoaEv=>{
    res.send(pessoaEv)
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  });
  
};

exports.selectInscrito = (req,res)=>{
  //seleciona um inscrito em um evento
  db.inscricaoEvento
    .findOne({
      where: { idEvento: req.params.idEvento, idPessoa: req.params.idPessoa }, include:[{model:db.pessoa,as:'pessoaInsc'},{model:db.evento,as:'eventoInsc'}]
    })
    .then(pessoaEv => {
      res.send(pessoaEv);
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

exports.InscricoesNoEvento=(req,res)=>{
  //seleciona todos inscritos em um evento
  db.inscricaoEvento.findAll({where:{idEvento:req.params.idEvento}, include:[{model:db.pessoa,as:'pessoaInsc'},{model:db.evento,as:'eventoInsc'}]}).then(pessoaEv=>{
    res.send(pessoaEv)
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  });
};

exports.InscricoesPessoa=(req,res)=>{
  //seleciona todos eventos que a pessoa se inscreveu
  db.inscricaoEvento.findAll({where:{idPessoa:req.params.idPessoa}, include:[{model:db.pessoa,as:'pessoaInsc'},{model:db.evento,as:'eventoInsc'}]}).then(pessoaEv=>{
    res.send(pessoaEv)
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  });
};

//----------------------------------------------------------------------------------------------------------

exports.cadastrarEmAtividade = (req, res) => {
  db.inscricaoEvento
    .findOne({
      where: { idEvento: req.params.idEvento, idPessoa: req.params.idPessoa }
    })
    .then(inscricao => {
      db.inscricaoAtividade
        .create({
          dataInscricao: req.body.dataInscricao,
          idEvento: inscricao.idEvento,
          idPessoa: inscricao.idPessoa,
          idAtividade: req.body.idAtividade
        })
        .then(inscriAtv => {
          res.send(inscriAtv);
        }).catch(err => {
          res.status(500).send("Error -> " + err);
        });
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

exports.deletaInscricaoAtividade = (req, res) => {
  db.inscricaoAtividade
    .destroy({
      where: {
        idEvento: req.params.idEvento,
        idAtividade: req.params.idAtividade,
        idPessoa: req.params.idPessoa
      }
    })
    .then(deleteInsc => {
      res.send("deletou");
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

exports.selectInscricaoAtividade = (req, res) => {
  //seleciona todas pessoas inscritas em todas atividades
  db.inscricaoAtividade.findAll({include:[{model:db.atividade,as:'atividade'},{model:db.inscricaoEvento,as:'eventoInsc',include:[{model:db.evento,as:'eventoInsc'},{model:db.pessoa,as:'pessoaInsc'}]}]}).then(pessoaAtv=>{
    res.send(pessoaAtv)
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  });
  
};


exports.selectInscritoAtv=(req,res)=>{
  //seleciona um inscrito em uma atividade
  db.inscricaoAtividade
    .findOne({
      where: {
        idEvento: req.params.idEvento,
        idAtividade: req.params.idAtividade,
        idPessoa: req.params.idPessoa
      },include:[{model:db.atividade,as:'atividade'},{model:db.inscricaoEvento,as:'eventoInsc',include:[{model:db.evento,as:'eventoInsc'},{model:db.pessoa,as:'pessoaInsc'}]}]
    })
    .then(pessoaAtv => {
      res.send(pessoaAtv);
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    });
};

exports.selectInscricoesNaAtividade=(req,res)=>{
  //seleciona as pessoas inscritas na ativdade
  db.inscricaoAtividade.findAll({where:{idAtividade:req.params.idAtividade,idEvento:req.params.idEvento},include:[{model:db.inscricaoEvento,as:'eventoInsc',include:[{model:db.evento,as:'eventoInsc'},{model:db.pessoa,as:'pessoaInsc'}]}]}).then(insc=>{
    res.send(insc)
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  });
};

exports.selectInscricoesPessoa=(req,res)=>{
  //seleciona as atividades que a pessoa se inscreveu
  db.inscricaoAtividade.findAll({where:{idPessoa:req.params.idPessoa},include:[{model:db.atividade,as:'atividade'}]}).then(insc=>{
    res.send(insc)
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  });
};