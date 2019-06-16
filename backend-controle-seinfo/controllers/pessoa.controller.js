const db = require("../models/index.js");
const Pessoa = db.pessoa;

// Post do Atividade
exports.create = (req, res) => {
  Pessoa.create({
    idPessoa: "usuario" + req.body.RA,
    nome: req.body.nome,
    email: req.body.email,
    CPF: req.body.cpf,
    senha: req.body.senha,
    nivel: req.body.nivel
  })
    .then(pessoa => {
      console.log("Criado uma Pessoa!");
      res.send(pessoa);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
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
  Pessoa.findAll({ raw: true })
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
    });
};

exports.selectInscricaoEvento = (req, res) => {
  db.inscricaoEvento.findAll({raw:true}).then(pessoaEv=>{
    res.send(pessoaEv)
  })
  /*
  db.inscricaoEvento
    .findOne({
      where: { idEvento: req.params.idEvento, idPessoa: req.params.idPessoa }
    })
    .then(pessoaEv => {
      res.send(pessoaEv);
    });*/
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
        });
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
    });
};

exports.selectInscricaoAtividade = (req, res) => {
  db.inscricaoAtividade.findAll({raw:true}).then(pessoaAtv=>{
    res.send(pessoaAtv)
  })
  /*
  db.inscricaoAtividade
    .findOne({
      where: {
        idEvento: req.params.idEvento,
        idAtividade: req.params.idAtividade,
        idPessoa: req.params.idAtividade
      }
    })
    .then(pessoaAtv => {
      res.send(pessoaAtv);
    });*/
};
