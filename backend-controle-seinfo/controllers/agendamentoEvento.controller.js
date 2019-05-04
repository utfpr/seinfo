const db = require('../config/db.config.js');
const AgEventos = db.agEventos;
 
// Post do Evento
exports.create = (req, res) => {
  console.log("Dentro de agendamento: \nidEvento = "+req.evento+"\n idAgenda: "+req.agenda)
  AgEventos.create({  
  //idEvento: req.body.idEvento,
  idEvento: req.evento,
  idAgenda: req.agenda

  }).then(agevento => {    
    // Cria um Evento
    console.log("Criado o Agendamento de Evento!")
    res.send(agevento);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 

exports.findById = (req, res) => {  
  AgEventos.findByPk(req.params.loteId).then(agevento => {
    console.log("Achou o lote pelo ID "+req.params.loteId);
    res.send(agevento); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.findAll = (req, res) => {  
  AgEventos.findAll({ raw: true}).then(agevento => {
    console.log("Listou Todos os Lotes!");
    res.send(agevento); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.delete = (req, res) => {  
  AgEventos.destroy({ where: { idLote: req.params.loteId } }).then(agevento => {
    console.log("Deletando o lote com o ID: "+req.params.loteId);
    res.send(agevento); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.amoeba = (req, res) => {
  console.log("Função de Teste");
};
