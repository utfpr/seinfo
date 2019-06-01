const db = require('../config/db.config.js');
const Evento = db.eventos;
const agendas = require('../controllers/agenda.controller.js');
const imagens = require('../controllers/imagem.controller.js');


 
// Post do Evento
exports.create = (req, res) => {

  //Concatenando para ser inserido no Banco de Dados
  const data_ini_full = req.body.data_ini+"T"+req.body.hora_ini;
  const data_fim_full = req.body.data_fim+"T"+req.body.hora_fim;
  const local = req.body.local_eve;
  const horas = req.body.horas;
  const imagem = req.body.urlImagem;
  
  Evento.create({  

    nome: req.body.nome,
    descricao: req.body.descricao,
    status: req.body.status

  }).then( evento => {


    // Cria um Evento
    console.log("\nCriado o evento com o id: "+evento.idEvento);
    
    // Cria Agenda e retorna o idDa Agenda
    agendas.create({"data_ini":data_ini_full,"data_fim":data_fim_full,"local":local,"horas":horas,"evento":evento.idEvento});
  
    // Insere uma url na tabela Imagem
    console.log("\nURL da IMAGEM: "+imagem);
    imagens.create({"url":imagem,"evento":evento.idEvento});

    res.send(evento);

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
