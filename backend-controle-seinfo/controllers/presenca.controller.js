const db = require('../models/index');

const Presenca = db.presenca;
const Atividade = db.atividade;
const Pessoa = db.pessoa;

const agendamentoAtividadeDb = db.agendamentoAtividade;

exports.create = async (idAtividade, idAgenda, idEvento, CPF) => {
  const presencaFoiConfirmada = await Presenca.findAll({
    where: { idAtividade, idAgenda, idEvento, CPF },
  });
  if (presencaFoiConfirmada) return 'Presença ja confirmada';
  await agendamentoAtividadeDb.create({ idAtividade, idAgenda });
  const presencaConfirmada = await Presenca.create({
    idAtividade,
    idAgenda,
    idEvento,
    CPF,
    presenca: true,
  });
  return presencaConfirmada;
};

exports.findById = (req, res) => {
  const { idAtividade, idAgenda, idEvento, CPF } = req.params;

  Presenca.findOne({
    where: {
      idAtividade,
      idAgenda,
      idEvento,
      CPF,
    },
  })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.findAll = (req, res) => {
  Presenca.findAll()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.delete = (req, res) => {
  const { idAtividade, idAgenda, idEvento, CPF } = req.params;

  Presenca.destroy({
    where: {
      idAtividade,
      idAgenda,
      idEvento,
      CPF,
    },
  })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.listPresenca = (req, res) => {
  Presenca.findAll({
    include: [
      {
        model: Atividade,
        attributes: ['titulo', 'horasParticipacao'],
      },
      {
        model: Pessoa,
        attributes: ['nome'],
      },
    ],
    where: {
      presenca: true,
    },
  })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send(err.toString());
    });
};
