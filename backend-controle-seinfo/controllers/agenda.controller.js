const db = require('../config/db.config.js');
const agEventos = require('../controllers/agendamentoEvento.controller.js');
const Agenda = db.agendas;
 
// Post do Eventod
exports.create = (req, res) => {

  Agenda.create({  

    dataHoraInicio: req.data_ini,
    dataHoraFim: req.data_fim,
    local: req.local,
    horasParticipacao: req.horas,

  }).then(agenda => {    
    // Cria um Evento
    console.log("Criado o Agenda! "+agenda.idAgenda);
    //vincula os id na tabela agendamentoEventos
    agEventos.create({"evento":req.evento,"agenda":agenda.idAgenda});
    res.send(agenda.idAgenda);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 

exports.findById = (req, res) => {  
    Agenda.findByPk(req.params.agendaId).then(agenda => {
      console.log("Achou o agendamento pelo ID "+req.params.agendaId);
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
      res.send(agenda); //Retorna um Json para a Pagina da API
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };

   exports.amoeba = (req, res) => {
     console.log("Função de Teste Agenda! \n"+req.data_ini+"\n "+req.data_fim+"\n "+req.local+"\n "+req.horas);
   };
