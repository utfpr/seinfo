const db = require('../models');

const Lotes = db.lote;

// Post do Evento
exports.create = async (req, res) => {
  try {
    const { valor, dataAbertura, dataFechamento, idEvento } = req.body;

    const lote = await Lotes.create({
      valor,
      dataAbertura,
      dataFechamento,
      idEvento,
    });

    return res.status(200).send(lote);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.findById = async (req, res) => {
  try {
    const { loteId } = req.params;

    const lote = await Lotes.findOne({ where: { idLote: loteId } });

    if (lote) {
      return res.status(200).send({ lote });
    }
    return res.status(404).send({ message: 'Lote não encontrado' });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.findAll = async (req, res) => {
  try {
    const lotes = await Lotes.findAll();
    return res.status(200).send(lotes);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.loteEvento = async (req, res) => {
  // todos lotes de um evento
  try {
    const { idEvento } = req.params;

    const lotes = await Lotes.findAll({
      where: { idEvento },
      include: [{ model: db.evento, attributes: ['nome'], as: 'evento' }],
    });

    if (lotes.length) {
      return res.status(200).send({ lotes });
    }
    return res.status(404).send({ message: 'Evento não encontrado' });
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.atualiza = async (req, res) => {
  try {
    const { loteId } = req.params;
    const { valor, dataAbertura, dataFechamento, idEvento } = req.body;

    const lote = await Lotes.findOne({ where: { idLote: loteId } });

    if (!lote) {
      return res.status(404).send({ message: 'Lote não encontrado' });
    }

    await lote.update(
      {
        valor,
        dataAbertura,
        dataFechamento,
        idEvento,
      },
      {
        where: {
          idLote: loteId,
        },
      }
    );

    return res.status(200).send(lote);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const { loteId } = req.params;

    const lote = await Lotes.destroy({ where: { idLote: loteId } });

    if (lote) {
      return res.status(200).send({ sucess: true });
    }
    return res.status(404).send({ message: 'Lote não encontrado' });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
