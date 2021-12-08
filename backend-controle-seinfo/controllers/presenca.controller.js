const db = require('../models');

const Presenca = db.presenca;
const Atividade = db.atividade;
const Pessoa = db.pessoa;
// const agendamentoAtividadeDb = db.agendamentoAtividade;

exports.createOrUpdate = async (
  idAtividade,
  idAgenda,
  idEvento,
  CPF,
  presenca
) => {
  const presencaExistente = await Presenca.findOne({
    where: { idAtividade, idAgenda, idEvento, CPF },
  });

  if (!presencaExistente) {
    const presencaCriada = await Presenca.create({
      idAtividade,
      idAgenda,
      idEvento,
      CPF,
      presenca: true,
    });
    return presencaCriada;
  }

  presencaExistente.presenca = presenca;
  presencaExistente.save();
  return presencaExistente;
};

exports.update = async (req, res) => {
  try {
    const { idAtividade, idAgenda, idEvento, cpf } = req.body;

    const presenca = await Presenca.findOne({
      where: { idAtividade, idAgenda, idEvento, CPF: cpf },
    });

    console.log(presenca);

    return res.status(200).json(presenca);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

exports.findById = (req, res) => {
  try {
    const { idAtividade, idAgenda, idEvento, CPF } = req.params;

    const presenca = Presenca.findOne({
      where: {
        idAtividade,
        idAgenda,
        idEvento,
        CPF,
      },
    });

    return res.status(200).json(presenca);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.findAll = (req, res) => {
  try {
    const presenca = Presenca.findAll();
    return res.status(200).json(presenca);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.delete = (req, res) => {
  try {
    const { idAtividade, idAgenda, idEvento, CPF } = req.params;

    const presenca = Presenca.destroy({
      where: {
        idAtividade,
        idAgenda,
        idEvento,
        CPF,
      },
    });

    return res.status(404).json(presenca);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.listPresenca = (req, res) => {
  try {
    const presenca = Presenca.findAll({
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
    });

    return res.status(200).json(presenca);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createPresenca = async (req, res) => {
  try {
    const { idAtividade, idAgenda, idEvento, cpf, presenca } = req.body;
    console.log(req.body);
    const resp = await this.createOrUpdate(
      idAtividade,
      idAgenda,
      idEvento,
      cpf,
      presenca
    );

    res.send(resp);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};