const db = require('../models');

const Atividades = db.atividade;
const atob = (b64Encoded) => Buffer.from(b64Encoded, 'base64').toString();

// Post do Atividade
exports.create = async (req, res) => {
  try {
    const {
      titulo,
      valor,
      descricao,
      horasParticipacao,
      quantidadeVagas,
      idEvento,
      idCategoria,
      subatividade,
      dataInicio,
      horaInicio,
    } = req.body;

    const dataAtividade = new Date(`${dataInicio}T${horaInicio}:00.003Z`);

    const atividade = await Atividades.create({
      titulo,
      valor,
      descricao,
      horasParticipacao,
      quantidadeVagas,
      idEvento,
      idCategoria,
      dataInicio: dataAtividade,
    });

    console.log(atividade, subatividade);

    // cria a subAtividade
    await Promise.all(
      subatividade.map((item) =>
        atividade.createAtvAgenda({
          local: item.local_subatividade,
          dataHoraInicio: `${item.data_inicio_subatividade}T${item.hora_inicio_subatividade}:00.003Z`,
          dataHoraFim: `${item.data_fim_subatividade}T${item.hora_fim_subatividade}:00.003Z`,
        })
      )
    );

    res.status(200).json(atividade);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.findById = (req, res) => {
  Atividades.findOne({
    where: {
      idAtividade: req.params.idAtividade,
      idEvento: req.params.idEvento,
    },
    include: [
      { model: db.categoria, as: 'categoriaAtv' },
      { model: db.agenda, as: 'atvAgenda', through: { attributes: [] } },
    ],
  })
    .then((atividade) => {
      console.log(`Achou uma atividade pelo ID ${req.params.idAtividade}`);
      res.send(atividade); // Retorna um Json para a Pagina da API
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.findAll = (req, res) => {
  Atividades.findAll({
    include: [
      { model: db.categoria, as: 'categoriaAtv' },
      { model: db.agenda, as: 'atvAgenda', through: { attributes: [] } },
    ],
  })
    .then((atividade) => {
      console.log('Listou Todas as Atividades!');
      res.send(atividade); // Retorna um Json para a Pagina da API
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.atualiza = (req, res) => {
  console.log(req.body);

  Atividades.update(
    {
      titulo: req.body.titulo,
      valor: req.body.valor,
      descricao: req.body.descricao,
      horasParticipacao: req.body.horasParticipacao,
      quantidadeVagas: req.body.quantidadeVagas,
      idCategoria: req.body.idCategoria,
      idEvento: req.body.idEvento,
    },
    { where: { idAtividade: req.params.idAtividade } }
  )
    .then((atividade) => {
      console.log('Atualizando uma Atividade');
      res.send(atividade);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Error ${err}`);
    });
};
exports.delete = (req, res) => {
  Atividades.destroy({
    where: {
      idAtividade: req.params.idAtividade,
      idEvento: req.params.idEvento,
    },
  })
    .then((atv) => res.status(200).json(atv))
    .catch((err) => res.status(500).send(`Error -> ${err}`));
};

exports.AtividadeEvento = (req, res) => {
  // seleciona as atividades de um unico evento
  Atividades.findAll({
    where: { idEvento: req.params.idEvento },
    include: [
      { model: db.categoria, as: 'categoriaAtv' },
      { model: db.agenda, as: 'atvAgenda', through: { attributes: [] } },
    ],
  })
    .then((atividade) => {
      console.log('Listou Todas as Atividades!');
      res.send(atividade); // Retorna um Json para a Pagina da API
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

//-------------------------------------------------------------------------------------------

exports.criarProtagonista = (req, res) => {
  Atividades.findOne({ where: { idAtividade: req.params.idAtividade } })
    .then((atividade) => {
      db.pessoa
        .findOne({ where: { CPF: atob(req.params.cpf) } })
        .then((pessoa) => {
          db.protagonista
            .create({
              atuacao: req.body.atuacao,
              idAtividade: atividade.idAtividade,
              CPF: pessoa.CPF,
            })
            .then((prot) => {
              res.send(prot);
            })
            .catch((err) => {
              res.status(500).send(`Error -> ${err}`);
            });
          // atividade.createAtividadeProt({'atuacao':req.body.atuacao,'idAtividade':atividade.idAtividade,'idPessoa':pessoa.idPessoa})
        })
        .catch((err) => {
          res.status(500).send(`Error -> ${err}`);
        });
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.selectProtagonista = (req, res) => {
  // seleciona todos protagonistas no banco de dados
  db.protagonista
    .findAll({
      include: [
        { model: db.pessoa, as: 'aPes' },
        {
          model: db.atividade,
          as: 'aAtv',
          include: [{ model: db.categoria, as: 'categoriaAtv' }],
        },
      ],
    })
    .then((prot) => {
      console.log(prot);
      res.send(prot);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.selectUmProtagonista = (req, res) => {
  // seleciona um protagonista de uma atividade
  db.protagonista
    .findOne({
      where: { idAtividade: req.params.idAtividade, CPF: atob(req.params.CPF) },
      include: [
        { model: db.pessoa, as: 'aPes' },
        {
          model: db.atividade,
          as: 'aAtv',
          include: [{ model: db.categoria, as: 'categoriaAtv' }],
        },
      ],
    })
    .then((prot) => {
      res.send(prot);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.ProtagonistasDaAtv = (req, res) => {
  // seleciona os protagonistas de uma atividade especifica
  db.protagonista
    .findAll({
      where: { idAtividade: req.params.idAtividade },
      include: [
        { model: db.pessoa, as: 'aPes' },
        {
          model: db.atividade,
          as: 'aAtv',
          include: [{ model: db.categoria, as: 'categoriaAtv' }],
        },
      ],
    })
    .then((prot) => {
      res.send(prot);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.AtividadesDoProtagonista = (req, res) => {
  // seleciona as atividades em que essa pessoa é protagonista
  db.protagonista
    .findAll({
      where: { CPF: atob(req.params.CPF) },
      include: [
        { model: db.pessoa, as: 'aPes' },
        {
          model: db.atividade,
          as: 'aAtv',
          include: [{ model: db.categoria, as: 'categoriaAtv' }],
        },
      ],
    })
    .then((prot) => {
      res.send(prot);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.deletaProtagonista = (req, res) => {
  db.protagonista
    .destroy({
      where: { idAtividade: req.params.idAtividade, CPF: atob(req.params.CPF) },
    })
    .then(() => {
      res.send('sumiu');
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};
