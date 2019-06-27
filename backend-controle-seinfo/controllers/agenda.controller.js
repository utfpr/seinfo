const db = require('../models/index.js');
const Agenda = db.agenda;
 
// Post do Eventos
exports.create = (req, res) => {
  console.log("\n\n Dentro de Agenda!");
  
  Agenda.create({  

    dataHoraInicio: req.data_ini,
    dataHoraFim: req.data_fim,
    local: req.local
    
  }).then(agenda => {    
    // Cria um Evento
    console.log("Criado o Agenda! "+agenda.idAgenda);
    res.send(agenda.idAgenda);
  }).catch(err => {
    res.status(500).send("Error -> " + err)
  })
};
 

exports.findById = (req, res) => {  
  Agenda.findByPk(req.params.agendaId).then(agenda => {
    console.log("Achou o Agenda pelo ID "+req.params.agendaId);
    res.send(agenda); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.findAll = (req, res) => {  
  Agenda.findAll({ raw: true}).then(agenda => {
    console.log("Listou Todos os Agendamentos!");
    res.send(agenda); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.atualiza = (req,res)=>{
  const data_ini_full = req.body.data_ini+"T"+req.body.hora_ini;
  const data_fim_full = req.body.data_fim+"T"+req.body.hora_fim;
  Agenda.update(
    {
      dataHoraInicio: req.data_ini,
      dataHoraFim: req.data_fim,
      local: req.local,
      horasParticipacao: req.horas,  
    },
    {where: {idAgenda: req.params.agendaId}}).then(agenda=>{
      console.log("Atualizando Agendamento");
      res.send(agenda);
    }).catch(err=>{
      res.status(500).send("Error "+err);
    })    
},
  

exports.delete = (req, res) => {  
  Agenda.destroy({ where: { idAgenda: req.params.agendaId } }).then(agenda => {
    console.log("Deletando o evento com o ID: "+req.params.agendaId);
    res.send('agenda'); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

