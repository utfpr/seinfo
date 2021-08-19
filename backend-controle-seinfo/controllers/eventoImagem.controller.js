const db = require('../models');

const EveImagens = db.eventoImagem;

// Post do Evento
exports.create = async (req, res) => {
  try {
    const agendaEvento = await EveImagens.create({
      idEvento: req.evento,
      idImagem: req.imagem,
    });

    return res.status(200).json(agendaEvento);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.findById = async (req, res) => {
  try {
    const lote = await EveImagens.findOne({
      where: { idLote: req.params.loteId },
    });

    return res.status(200).json(lote);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.findAll = async (req, res) => {
  try {
    const lotes = await EveImagens.findAll();

    return res.status(200).json(lotes);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.delete = async (req, res) => {
  try {
    const delLote = await EveImagens.destroy({
      where: { idLote: req.params.loteId },
    });

    return res.status(200).json(delLote);
  } catch (error) {
    return res.status(500).json(error);
  }
};
