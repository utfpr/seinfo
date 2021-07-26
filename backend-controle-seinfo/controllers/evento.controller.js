const db = require('../models/index');

const Evento = db.evento;
const Agenda = db.agenda;
const Inscricao = db.inscricaoEvento;
const Lote = db.lote;
const Pessoa = db.pessoa;
const Organizacao = db.organizacao;

// Post do Evento
exports.create = async (req, res) => {
  try {
    const {
      data_ini,
      hora_ini,
      data_fim,
      hora_fim,
      local_eve,
      nome,
      descricao,
      select_status,
      lote,
      cpfOrganizador,
    } = req.body;

    const agenda = await Agenda.create({
      dataHoraInicio: `${data_ini}T${hora_ini}`,
      dataHoraFim: `${data_fim}T${hora_fim}`,
      local: local_eve,
    });

    const evento = await Evento.create({
      nome,
      descricao,
      status: select_status,
      idAgenda: agenda.idAgenda,
    });

    await Promise.all(
      lote.forEach(async (loteItem) => {
        await Lote.create({
          evento: evento.idEvento,
          valor: loteItem.valor_lote,
          dataAbertura: loteItem.data_inicio_lote,
          dataFechamento: loteItem.data_fim_lote,
        });
      })
    );

    const pessoa = await Pessoa.findOne({
      where: { CPF: cpfOrganizador },
    });

    await Organizacao.create({
      // 'horasParticipacao': req.body.horasParticipacao,
      idEvento: evento.idEvento,
      CPF: pessoa.CPF,
    });

    return res.status(200).json(evento);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.findById = (req, res) => {
  Evento.findOne({
    where: { idEvento: req.params.idEvento },
    include: [
      { model: db.lote, as: 'lotes' },
      { model: db.agenda, as: 'agendamento' },
    ],
  })
    .then((evento) => {
      console.log(`Achou o evento pelo ID ${req.params.idEvento}`);
      res.send(evento); // Retorna um Json para a Pagina da API
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.findAll = (req, res) => {
  Evento.findAll({
    include: [
      { model: db.lote, as: 'lotes' },
      { model: db.agenda, as: 'agendamento' },
    ],
  })
    .then((evento) => {
      console.log('Listou Todos os Eventos!');
      res.send(evento); // Retorna um Json para a Pagina da API
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.atualiza = (req, res) => {
  console.log('req:', req.body);
  Evento.update(
    {
      nome: req.body.nome,
      descricao: req.body.descricao,
      status: req.body.select_status,
      // data_horario_inicio: data_ini_full ,
      // data_hora_fim: data_fim_full,
      // urlImagem: req.body.urlImagem
    },
    { where: { idEvento: req.params.idEvento } }
  )
    .then((evento) => {
      console.log('Atualizando evento');
      res.send(evento);
    })
    .catch((err) => {
      res.status(500).send(`Error ${err}`);
    });
};

exports.delete = (req, res) => {
  Evento.destroy({ where: { idEvento: req.params.idEvento } })
    .then(() => {
      console.log(`Deletando o evento com o ID: ${req.params.idEvento}`);
      res.send({ msg: 'Evento deletado com sucesso' }); // Retorna um Json para a Pagina da API
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.getAllEventosCPF = async (req, res) => {
  try {
    const { CPF } = req.body;
    console.log(CPF);
    const eventos = await Evento.findAll({
      where: { status: 1 },
      include: [
        { model: db.lote, as: 'lotes' },
        { model: db.agenda, as: 'agendamento' },
      ],
    });

    if (!eventos)
      return res.status(404).json('Não existe nenhum evento disponivel');

    const idEventosInscrito = (
      await Inscricao.findAll({
        attributes: ['idEvento'],
        where: { CPF },
      })
    ).map((inscricao) => inscricao.idEvento);

    const eventosVerificados = eventos.map((evento) => ({
      ...evento.dataValues,
      estaInscrito: idEventosInscrito.includes(evento.idEvento),
    }));

    return res.status(200).json(eventosVerificados);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getAllAvailableEvents = async (req, res) => {
  try {
    const eventos = await Evento.findAll({
      where: { status: 1 },
      include: [
        { model: db.lote, as: 'lotes' },
        { model: db.agenda, as: 'agendamento' },
      ],
    });

    if (!eventos)
      return res.status(404).json('Não existe nenhum evento disponivel');

    return res.status(200).json(eventos);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.EvReceita = (req, res) => {
  // receita de um evento
  db.receita
    .findAll({ where: { idEvento: req.params.idEvento } })
    .then((recEv) => {
      res.send(recEv);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

// receita de inscritos no evento
exports.RecInEv = (req, res) => {
  db.receitaInscricaoEvento
    .findAll({ where: { idEvento: req.params.idEvento } })
    .then((inscEv) => {
      res.send(inscEv);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.DespEv = (req, res) => {
  // despesa de um evento
  db.despesa
    .findAll({ where: { idEvento: req.params.idEvento } })
    .then((DeEv) => {
      res.send(DeEv);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

//------------------------------------------------------------------------------------------
// foi trocado IDPessoa para CPF

exports.criaOrganizacao = (req, res) => {
  Evento.findOne({ where: { idEvento: req.params.idEvento } })
    .then((evento) => {
      db.pessoa
        .findOne({ where: { CPF: req.params.CPF } })
        .then((pessoa) => {
          db.organizacao
            .create({
              horasParticipacao: req.body.horasParticipacao,
              idEvento: evento.idEvento,
              CPF: pessoa.CPF,
            })
            .then((org) => {
              res.send(org);
            })
            .catch((err) => {
              res.status(500).send(`Error -> ${err}`);
            });
        })
        .catch((err) => {
          res.status(500).send(`Error -> ${err}`);
        });
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.selectOrganizacao = (req, res) => {
  // seleciona todos organizadores em todos eventos
  db.organizacao
    .findAll({
      include: [
        { model: db.pessoa, as: 'oPes' },
        { model: db.evento, as: 'oEv' },
      ],
    })
    .then((org) => {
      res.send(org);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.selectUmOrganizador = (req, res) => {
  // seleciona um organizdor de um evento
  db.organizacao
    .findOne({
      where: { CPF: req.params.CPF, idEvento: req.params.idEvento },
      include: [
        { model: db.pessoa, as: 'oPes' },
        { model: db.evento, as: 'oEv' },
      ],
    })
    .then((org) => {
      res.send(org);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.selectOrganizacaoEvento = (req, res) => {
  // seleciona os organizadores de um evento
  db.organizacao
    .findAll({
      where: { idEvento: req.params.idEvento },
      include: [
        { model: db.pessoa, as: 'oPes' },
        { model: db.evento, as: 'oEv' },
      ],
    })
    .then((org) => {
      res.send(org);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.selectEventoOrganizador = (req, res) => {
  // seleciona os eventos onde a pessoa é organizadora
  db.organizacao
    .findAll({
      where: { CPF: req.params.CPF },
      include: [
        { model: db.pessoa, as: 'oPes' },
        { model: db.evento, as: 'oEv' },
      ],
    })
    .then((org) => {
      res.send(org);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.deleteOrganizacao = (req, res) => {
  db.organizacao
    .destroy({ where: { CPF: req.params.CPF, idEvento: req.params.idEvento } })
    .then(() => {
      res.send('deletou');
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};
