const db = require('../models');

const ReceitaInscricaoEvento = db.receitaInscricaoEvento;

exports.create = async(req, res) => {
  try {
    const {idEvento, CPF, dataPagamento} = req.body;
    const receita = await ReceitaInscricaoEvento.create({
      idEvento = idEvento,
      CPF = CPF,
      dataPagamento = dataPagamento
    })

    return res.status(200).json(receita);
  } catch (error) {
    return res.status(500).json(error);
  }
}

exports.findById = async (req, res) => {
  try {
    const {eventoId, pessoaId} = req.params;
    const receitaInscricaoEvento = await ReceitaInscricaoEvento.findOne({
      where: {
        idEvento: eventoId,
        CPF: pessoaId
      }
    });
    
    return res.status(200).json(receitaInscricaoEvento);
    }
  catch (error) {
    return res.status(500).json(error);
  }
}