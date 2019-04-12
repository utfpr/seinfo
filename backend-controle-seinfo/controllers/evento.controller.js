const db = require('../config/db.config.js');
const Evento = db.eventos;
 
// Post do Evento
exports.create = (req, res) => {

  //Concatenando para ser inserido no Banco de Dados
  const data_ini_full = req.body.data_ini+"T"+req.body.hora_ini;
  const data_fim_full = req.body.data_fim+"T"+req.body.hora_fim;

  Evento.create({  
    idEvento: req.body.idEvento,
    nome: req.body.nome,
    valor: req.body.valor,
    descricao: req.body.descricao,
    data_horario_inicio: data_ini_full ,
    data_hora_fim: data_fim_full

  }).then(evento => {    
    // Cria um Evento
    console.log("Criado o evento!")
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


  exports.delete = (req, res) => {  
    Evento.destroy({ where: { idEvento: req.params.eventoId } }).then(evento => {
      console.log("Deletando o evento com o ID: "+req.params.eventoId);
      res.send(evento); //Retorna um Json para a Pagina da API
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };

  exports.amoeba = (req, res) => {
    console.log("Função de Teste");
  };
