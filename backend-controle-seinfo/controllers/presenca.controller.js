const db = require('../models');

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
  try {
    const { idAtividade, idAgenda, idEvento, CPF } = req.params;

    const presenca = Presenca.findOne({
      where: {
        idAtividade,
        idAgenda,
        idEvento,
        CPF,
      },
    })

    return res.status(200).json(presenca);
  } catch (error) {
    return res.status(500).json(response);
  }
}

exports.findAll = (req, res) => {
  try {
    const presenca = Presenca.findAll();
    return res.status(200).json(presenca);
  } catch (error) {
    return res.status(500).json(error);
  }
}

exports.delete = (req, res) => {
  try {
    const { idAtividade, idAgenda, idEvento, CPF } = req.params;

  const presenca = Presenca.destroy({
    where: {
      idAtividade,
      idAgenda,
      idEvento,
      CPF,
    }})

    return res.status(404).json(presenca);
  } catch (error) {
    return res.status(500).json(error);
  }
}

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
    })

    return res.status(200).json(presenca);
  } catch (error) {
    return res.status(500).json(error);
  }
}