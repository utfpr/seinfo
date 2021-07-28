const db = require('../models/index');

const Agenda = db.agenda;

// Post do Eventos
exports.create = (req, res) => {
  Agenda.create({
    dataHoraInicio: req.data_ini,
    dataHoraFim: req.data_fim,
    local: req.local,
  })
    .then((agenda) => {
      // Cria um Evento
      res.send(agenda.idAgenda);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.findById = (req, res) => {
  Agenda.findOne({ where: { idAgenda: req.params.agendaId } })
    .then((agenda) => {
      res.send(agenda); // Retorna um Json para a Pagina da API
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.findAll = (req, res) => {
  Agenda.findAll()
    .then((agenda) => {
      res.send(agenda); // Retorna um Json para a Pagina da API
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.atualiza = (req, res) => {
  // const data_ini_full = `${req.body.data_ini}T${req.body.hora_ini}`;
  // const data_fim_full = `${req.body.data_fim}T${req.body.hora_fim}`;
  Agenda.update(
    {
      dataHoraInicio: req.data_ini,
      dataHoraFim: req.data_fim,
      local: req.local,
      horasParticipacao: req.horas,
    },
    { where: { idAgenda: req.params.agendaId } }
  )
    .then((agenda) => {
      res.send(agenda);
    })
    .catch((err) => {
      res.status(500).send(`Error ${err}`);
    });
};
exports.delete = (req, res) => {
  Agenda.destroy({ where: { idAgenda: req.params.agendaId } })
    .then((agenda) => {
      res.send(agenda); // Retorna um Json para a Pagina da API
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};
