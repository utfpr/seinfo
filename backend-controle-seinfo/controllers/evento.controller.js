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
      status: req.body.status,
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
  Evento.findByPk(req.params.eventoId).then(evento => {
    console.log("Achou o evento pelo ID "+req.params.eventoId);
    res.send(evento); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.findAll = (req, res) => {  
  Evento.findAll({ raw: true}).then(evento => {
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
    {where: {idEvento: req.params.eventoId}}).then(evento=>{
      console.log("Atualizando evento");
      res.send(evento);
    }).catch(err=>{
      res.status(500).send("Error "+err);
    })
    
  },
  

exports.delete = (req, res) => {  
  Evento.destroy({ where: { idEvento: req.params.eventoId } }).then(evento => {
    console.log("Deletando o evento com o ID: "+req.params.eventoId);
    res.send(evento); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

   exports.amoeba = (req, res) => {
     console.log("\n------------------- Função de Teste ------------------------------ \n");
   };
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