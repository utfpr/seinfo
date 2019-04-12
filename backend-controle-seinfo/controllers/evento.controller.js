const db = require('../config/db.config.js');
const Evento = db.eventos;
 
// Post a Evento
exports.create = (req, res) => {

  const data_ini_full = req.body.data_ini+"T"+req.body.hora_ini;
  const data_fim_full = req.body.data_fim+"T"+req.body.hora_fim;
  console.log("Data INI: "+ data_ini_full);
  console.log("Data FIM: "+ data_fim_full)
  // Save to MySQL database
  Evento.create({  
    idEvento: req.body.idEvento,
    nome: req.body.nome,
    valor: req.body.valor,
    descricao: req.body.descricao,
    data_horario_inicio: data_ini_full ,
    data_hora_fim: data_fim_full
  }).then(evento => {    
    // Send created customer to client
    console.log("Criado o evento: ")
    res.send(evento);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 

exports.findById = (req, res) => {  
    Evento.findById(req.params.customerId).then(evento => {
      console.log("PUTA MERDA");
      res.send(evento);
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };

  exports.findAll = (req, res) => {  
    Evento.findAll({ raw: true}).then(evento => {
      console.log("PUTA MERDA");
      res.send(evento);
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };


  exports.delete = (req, res) => {  
    Evento.destroy({ where: { idEvento: req.params.eventoId } }).then(evento => {
      console.log("Deletando");
      res.send(evento);
    }).catch(err => {
      res.status(500).send("Error 2 -> " + err);
    })
  };

  exports.amoeba = (req, res) => {
    console.log("PUTA MERDA22222");
  };
