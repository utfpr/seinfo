const db = require('../models');

const Agenda = db.agenda;

exports.create = async (req, res) => {
  try {
    const { data_ini, data_fim, local } = req;

    const agenda = await Agenda.create({
      dataHoraInicio: data_ini,
      dataHoraFim: data_fim,
      local,
    });

    return res.status(200).json(agenda);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.findById = async (req, res) => {
  try {
    const { agendaId } = req.params;

    const agenda = await Agenda.findOne({
      where: {
        idAgenda: agendaId,
      },
    });

    return res.status(200).json(agenda);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.findAll = async (req, res) => {
  try {
    const agendas = await Agenda.findAll();

    return res.status(200).json(agendas);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.atualiza = async (req, res) => {
  try {
    const { data_ini, data_fim, local, horas } = req;
    const { agendaId } = req.params;

    const agenda = await Agenda.update(
      {
        dataHoraInicio: data_ini,
        dataHoraFim: data_fim,
        local,
        horasParticipacao: horas,
      },
      {
        where: {
          idAgenda: agendaId,
        },
      }
    );

    return res.status(200).json(agenda);
  } catch (error) {
    return res.status(500).json(error);
  }
};
exports.delete = async (req, res) => {
  try {
    const { agendaId } = req.params;

    const agenda = await Agenda.destroy({
      where: { idAgenda: agendaId },
    });

    return res.status(200).json(agenda);
  } catch (error) {
    return res.status(500).json(error);
  }
};
