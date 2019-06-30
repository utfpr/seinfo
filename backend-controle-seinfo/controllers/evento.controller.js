const db = require('../models/index.js');
const Evento = db.evento;
const Agenda = db.agenda;
const Imagem = db.imagem;
const evImagem = require('../controllers/eventoImagem.controller.js');;

 
// Post do Evento
exports.create = (req, res, nomedoarquivo) => {

  //Concatenando para ser inserido no Banco de Dados
  const data_ini_full = req.body.data_ini+"T"+req.body.hora_ini;
  const data_fim_full = req.body.data_fim+"T"+req.body.hora_fim;
  const local = req.body.local_eve;
  const imagem_url = nomedoarquivo;
  
  Agenda.create({  

    dataHoraInicio: data_ini_full,
    dataHoraFim: data_fim_full,
    local: local,
  
  }).then(agenda => {
    // Cria uma Agenda 
    console.log("Criado o Agenda! "+agenda.idAgenda);

    Evento.create({  
      nome: req.body.nome,
      descricao: req.body.descricao,
      status: req.body.select_status,
      idAgenda: agenda.idAgenda
  
    }).then( evento => {
      // Cria um Evento
      console.log("\nCriado o evento com o id: "+evento.idEvento);
      
      Imagem.create({  
        url: imagem_url
    
      }).then( imagem => {
        // Cria uma Imagem
        console.log("\nCriado a Imagem com o id: "+imagem.idImagem);
        
        //Cria o vingulo entre IdEvento e idImagem
        evImagem.create({"imagem":imagem.idImagem,"evento":evento.idEvento});
  
      }).catch(err => {
        res.status(500).send("Error -> " + err);
      })
  
      res.send(evento); 
      //res.redirect("http://localhost:8080/adm/cadEvento"); 
  
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
  Evento.findAll({ raw: true,include:[{model:db.lote,as:'lotes'},{model:db.agenda,as:'agendamento'}]}).then(evento => {
    console.log("Listou Todos os Eventos!");
    res.send(evento); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.atualiza = (req,res)=>{
  const data_ini_full = req.body.data_ini+"T"+req.body.hora_ini;
  const data_fim_full = req.body.data_fim+"T"+req.body.hora_fim;
  Evento.update(
    {
    nome: req.body.nome,
    descricao: req.body.descricao,
    status: req.body.status,

    //data_horario_inicio: data_ini_full ,
    //data_hora_fim: data_fim_full,
    //urlImagem: req.body.urlImagem
  
    },
    {where: {idEvento: req.params.idEvento}}).then(evento=>{
      console.log("Atualizando evento");
      res.send(evento);
    }).catch(err=>{
      res.status(500).send("Error "+err);
    })
    
  },
  

exports.delete = (req, res) => {  
  Evento.destroy({ where: { idEvento: req.params.idEvento } }).then(evento => {
    console.log("Deletando o evento com o ID: "+req.params.idEvento);
    res.send(evento); //Retorna um Json para a Pagina da API
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

/*Evento.findOne({where: {idEvento:req.params.idEvento},include:[{model: db.agendamentoEvento,as:'agendamento',include:[{model: db.agenda,as:'agendaEv'}]},{model:db.atividade,as:'atividades', include:[{model:db.categoria,as:'categoria',attributes:['nome']}]},{model:db.lote,as:'lotes'}]}).then(evento => {
    console.log("Achou o evento pelo ID "+req.params.idEvento);
    //res.send(evento.agendamento[0].agendaEv.local); //Retorna um Json para a Pagina da API    
    //res.send(evento.atividades[0].categoria.nome); //Retorna um Json para a Pagina da API    
    res.send(evento); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })

  Evento.findOne({where: {idEvento:req.params.idEvento},include: [{model: db.pessoa, as:'ePessoa',through:{attributes:['horasParticipacao']}}]}).then(evento=>{
    //Evento.getPessoa
    res.send(evento)
  }).catch(err=>{
    res.status(500).send(err)
  })*/

//------------------------------------------------------------------------------------------

exports.criaOrganizacao =(req,res)=>{
  Evento.findOne({where:{idEvento:req.params.idEvento}}).then(evento=>{
    db.pessoa.findOne({where:{idPessoa:req.params.idPessoa}}).then(pessoa=>{
      db.organizacao.create({'horasParticipacao':req.body.horasParticipacao,'idEvento':evento.idEvento,'idPessoa':pessoa.idPessoa}).then(org=>{
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
  db.organizacao.findAll({raw:true, include:[{model:db.pessoa,as:'oPes'},{model:db.evento,as:'oEv'}]}).then(org=>{
    res.send(org)
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
  
}

exports.selectUmOrganizador=(req,res)=>{
  //seleciona um organizdor de um evento
  db.organizacao.findOne({where:{idPessoa:req.params.idPessoa,idEvento:req.params.idEvento}, include:[{model:db.pessoa,as:'oPes'},{model:db.evento,as:'oEv'}]}).then(org=>{
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
  db.organizacao.findAll({where:{idPessoa:req.params.idPessoa}, include:[{model:db.pessoa,as:'oPes'},{model:db.evento,as:'oEv'}]}).then(org=>{
    res.send(org)
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
}


exports.deleteOrganizacao=(req,res)=>{
  db.organizacao.destroy({where:{idPessoa:req.params.idPessoa,idEvento:req.params.idEvento}}).then(org=>{
    res.send('deletou')
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
}