const db = require('../config/db.config.js');
const Minicurso = db.minicruso;
 
// Post do Evento
exports.create = (req, res) => {

  //Concatenando para ser inserido no Banco de Dados
  const data_ini_full = req.body.data_ini+"T"+req.body.hora_ini;
  const data_fim_full = req.body.data_fim+"T"+req.body.hora_fim;

  Minicurso.create({  
    nome: req.body.nome,
    valor: req.body.valor,
    descricao: req.body.descricao,
    data_horario_inicio: data_ini_full ,
    data_hora_fim: data_fim_full,
    local: req.body.local,
    idEvento: req.body.eventoId
  },
  /*{
     // where: {idEvento: req.body.eventoId}
  }*/).then(minicurso => {    
    // Cria um Evento
    console.log("Criado o minicurso!")
    res.send(minicurso);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 

exports.findById = (req, res) => {  
    Minicurso.findByPk(req.params.minicursoId).then(minicruso => {
      console.log("Achou o minicurso pelo ID "+req.params.minicursoId);
      res.send(minicruso); //Retorna um Json para a Pagina da API
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };

  exports.findAll = (req, res) => {  
    Minicurso.findAll({ raw: true}).then(minicruso => {
      console.log("Listou Todos os Minicursos!");
      res.send(minicruso); //Retorna um Json para a Pagina da API
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };

  exports.atualiza = (req,res)=>{
    const data_ini_full = req.body.data_ini+"T"+req.body.hora_ini;
    const data_fim_full = req.body.data_fim+"T"+req.body.hora_fim;
    Minicurso.update(
      {nome: req.body.nome,
      valor: req.body.valor,
      descricao: req.body.descricao,
      data_horario_inicio: data_ini_full ,
      data_hora_fim: data_fim_full,
      local: req.body.local,
      //idEvento: req.body.eventoId
    },
      {where: {idMinicurso: req.params.minicursoId}}).then(minicruso=>{
        console.log("Atualizando evento");
        res.send(minicruso);
      }).catch(err=>{
        res.sendStatus(500).send("Error "+err);
      })
      
    },
  

  exports.delete = (req, res) => {  
    Minicurso.destroy({ where: { idMinicurso: req.params.minicursoId } }).then(minicurso => {
      console.log("Deletando o evento com o ID: "+req.params.minicursoId);
      res.send(minicurso); //Retorna um Json para a Pagina da API
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };