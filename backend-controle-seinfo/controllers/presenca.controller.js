const db = require('../models/index.js');
const Presenca = db.Presenca;

exports.create = (req, res) => {

    const { idAtividade, idAgenda, idEvento, CPF } = req.params;

    Presenca.create({
        idAtividade,
        idAgenda,
        idEvento,
        CPF,
    }).then((response) => {
        res.status(200).send(response);
    }).catch((err) => {
        res.status(500).send(err);
    });
};

exports.findById = (req, res) => {

    const { idAtividade, idAgenda, idEvento, CPF } = req.params;

    Presenca.findOne({ 
        where: { 
            idAtividade, 
            idAgenda, 
            idEvento, 
            CPF,
        }
    }).then(response => {
        res.status(200).send(response);
    }).catch(err => {
        res.status(500).send(err);
    })
};

exports.findAll = (req, res) => {
    Presenca.findAll()
    .then(response => {
        res.status(200).send(response);
    }).catch(err => {
        res.status(500).send(err);
    })
};

exports.delete = (req, res) => {  

    const { idAtividade, idAgenda, idEvento, CPF } = req.params;

    Presenca.destroy({ 
        where: { 
            idAtividade,
            idAgenda,
            idEvento,
            CPF,
        }
    }).then(response => {
      res.status(200).send(response);
    }).catch(err => {
        res.status(500).send(err);
    })
};
