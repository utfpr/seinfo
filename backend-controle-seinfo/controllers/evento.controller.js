const db = require('../models/index.js');
const Evento = db.evento;
const Agenda = db.agenda;
const Imagem = db.imagem;
const evImagem = require('../controllers/eventoImagem.controller.js');
const lote = require('../controllers/lote.controller.js');

// Post do Evento
exports.create = (req, res, nomedoarquivo) => {

  const data_ini_full = req.body.data_ini+"T"+req.body.hora_ini;
  const data_fim_full = req.body.data_fim+"T"+req.body.hora_fim;
  const local = req.body.local_eve;

  const imagem_url = "";
  
  Agenda.create({  
    dataHoraInicio: data_ini_full,
    dataHoraFim: data_fim_full,
    local: local,
  }).then(agenda => {
    console.log("Criado o Agenda! "+agenda.idAgenda);

    Evento.create({  
      nome: req.body.nome,
      descricao: req.body.descricao,
      status: req.body.select_status,
      idAgenda: agenda.idAgenda

    }).then(evento => {
      for(i = 0; i < req.body.lote.length; i++){
        lote.create({"evento":evento.idEvento,"valor":req.body.lote[i].valor_lote,"dataAbertura":req.body.lote[i].data_inicio_lote,"dataFechamento":req.body.lote[i].data_fim_lote});
      }

      db.pessoa.findOne({where:{CPF: req.body.cpfOrganizador}}).then(pessoa => {
        db.organizacao.create({
          // 'horasParticipacao': req.body.horasParticipacao,
          'idEvento': evento.idEvento,
          'CPF': pessoa.CPF
        })
      })
      
      res.send(evento)
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.findById = (req, res) => {  
  Evento.findOne({where:{idEvento:req.params.idEvento},include:[{model:db.lote,as:'lotes'},{model:db.agenda,as:'agendamento'}]}).then(evento => {
    console.log("Achou o evento pelo ID "+req.params.idEvento);
    res.send(evento); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.findAll = (req, res) => {  
  Evento.findAll({include:[{model:db.lote,as:'lotes'},{model:db.agenda,as:'agendamento'}]}).then(evento => {
    console.log("Listou Todos os Eventos!");
    res.send(evento); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.atualiza = (req,res)=>{
  console.log("aaaaaaaaa",req.body);
  const data_ini_full = req.body.data_ini+"T"+req.body.hora_ini;
  const data_fim_full = req.body.data_fim+"T"+req.body.hora_fim;
  Evento.update(
    {
      nome: req.body.nome,
      descricao: req.body.descricao,
      status: req.body.select_status,
      // data_horario_inicio: data_ini_full ,
      //data_hora_fim: data_fim_full,
      //urlImagem: req.body.urlImagem
    },
    {where: {idEvento: req.params.idEvento}}).then(evento => {
      console.log("Atualizando evento");
      res.send(evento);
    }).catch(err=>{
      res.status(500).send("Error "+err);
    })
    
  },
  

exports.delete = (req, res) => {  
  Evento.destroy({ where: { idEvento: req.params.idEvento } }).then(evento => {
    console.log("Deletando o evento com o ID: "+req.params.idEvento);
    res.send({msg:"Evento deletado com sucesso"}); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.EvDisponivel = (req, res) => {  
  //eventos disponiveis
  Evento.findAll({ where:{status:1},include:[{model:db.lote,as:'lotes'},{model:db.agenda,as:'agendamento'}]}).then(evento => {
    console.log("Listou Todos os Eventos!");
    res.send(evento); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.EvReceita=(req,res)=>{
  //receita de um evento
  db.receita.findAll({where:{idEvento:req.params.idEvento}}).then(recEv=>{
    res.send(recEv)
  }).catch(err=>{
    res.status(500).send("Error -> " + err);
  })
}

//receita de inscritos no evento
exports.RecInEv=(req,res)=>{
  db.receitaInscricaoEvento.findAll({where:{idEvento:req.params.idEvento}}).then(inscEv=>{
    res.send(inscEv)
  }).catch(err=>{
    res.status(500).send("Error -> " + err);
  })
}

exports.DespEv=(req,res)=>{
  //despesa de um evento
  db.despesa.findAll({where:{idEvento:req.params.idEvento}}).then(DeEv=>{
    res.send(DeEv)
  }).catch(err=>{
    res.status(500).send("Error -> " + err);
  })
}


//------------------------------------------------------------------------------------------
//foi trocado IDPessoa para CPF


exports.criaOrganizacao = (req,res)=>{
  Evento.findOne({where:{idEvento:req.params.idEvento}}).then(evento=>{
    db.pessoa.findOne({where:{CPF:req.params.CPF}}).then(pessoa => {
      db.organizacao.create({'horasParticipacao':req.body.horasParticipacao,'idEvento':evento.idEvento,'CPF':pessoa.CPF}).then(org=>{
        res.send(org)
      }).catch(err=>{
        res.status(500).send("Error -> " + err);
      })
    }).catch(err=>{
      res.status(500).send("Error -> " + err);
    })
  }).catch(err=>{
    res.status(500).send("Error -> " + err);
  })
}

exports.selectOrganizacao=(req,res)=>{
  //seleciona todos organizadores em todos eventos
  db.organizacao.findAll({ include:[{model:db.pessoa,as:'oPes'},{model:db.evento,as:'oEv'}]}).then(org=>{
    res.send(org)
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
}

exports.selectUmOrganizador=(req,res)=>{
  //seleciona um organizdor de um evento
  db.organizacao.findOne({where:{CPF:req.params.CPF,idEvento:req.params.idEvento}, include:[{model:db.pessoa,as:'oPes'},{model:db.evento,as:'oEv'}]}).then(org=>{
    res.send(org)
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
}

exports.selectOrganizacaoEvento=(req,res)=>{
  //seleciona os organizadores de um evento
  db.organizacao.findAll({where:{idEvento:req.params.idEvento}, include:[{model:db.pessoa,as:'oPes'},{model:db.evento,as:'oEv'}]}).then(org=>{
    res.send(org)
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
}

exports.selectEventoOrganizador=(req,res)=>{
  //seleciona os eventos onde a pessoa é organizadora
  db.organizacao.findAll({where:{CPF:req.params.CPF}, include:[{model:db.pessoa,as:'oPes'},{model:db.evento,as:'oEv'}]}).then(org=>{
    res.send(org)
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
}


exports.deleteOrganizacao=(req,res)=>{
  db.organizacao.destroy({where:{CPF:req.params.CPF,idEvento:req.params.idEvento}}).then(org=>{
    res.send('deletou')
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
}