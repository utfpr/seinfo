const db = require('../models/index.js');

const Lotes = db.lote;

// Post do Evento
exports.create = (req, res) => {
  Lotes.create({
    // idEvento: req.body.idEvento,
    valor: req.valor,
    dataAbertura: req.dataAbertura,
    dataFechamento: req.dataFechamento,
    idEvento: req.evento,
  })
    .then((lote) => {
      // Cria um Evento
      console.log('Criado o Lote!');
      // res.redirect("http://localhost:8080/adm/cadEvento");
      // console.log(lote);
    })
    .catch((err) => {
      console.log(`Error -> ${err}`);
    });
};

exports.findById = (req, res) => {
  Lotes.findOne({ where: { idLote: req.params.loteId } })
    .then((lote) => {
      console.log(`Achou o lote pelo ID ${req.params.loteId}`);
      res.send(lote); // Retorna um Json para a Pagina da API
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.findAll = (req, res) => {
  Lotes.findAll()
    .then((lote) => {
      console.log('Listou Todos os Lotes!');
      res.send(lote); // Retorna um Json para a Pagina da API
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.loteEvento = (req, res) => {
  // todos lotes de um evento
  Lotes.findAll({
    where: { idEvento: req.params.idEvento },
    include: [{ model: db.evento, attributes: ['nome'], as: 'evento' }],
  })
    .then((lotes) => {
      console.log('Listou todos os lotes!');
      res.send(lotes);
    })
    .catch((err) => {
      console.log(`Error -> ${err}`);
    });
};

exports.atualiza = (req, res) => {
  Lotes.update(
    {
      valor: req.body.valor,
      dataAbertura: req.body.dataAbertura,
      dataFechamento: req.body.dataFechamento,
      idEvento: req.body.idEvento,
    },
    { where: { idLote: req.params.loteId } }
  )
    .then((lote) => {
      console.log('Atualizando Lote');
      res.send(lote);
    })
    .catch((err) => {
      res.status(500).send(`Error ${err}`);
    });
};

exports.delete = (req, res) => {
  Lotes.destroy({ where: { idLote: req.params.loteId } })
    .then((lote) => {
      console.log(`Deletando o lote com o ID: ${req.params.loteId}`);
      res.send(lote); // Retorna um Json para a Pagina da API
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};
