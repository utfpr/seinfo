const db = require('../config/db.config.js');
const Palestra = db.palestra;
 
// Post do Evento
exports.create = (req, res) => {

  //Concatenando para ser inserido no Banco de Dados
  const data_ini_full = req.body.data_ini+"T"+req.body.hora_ini;
  

  Palestra.create({  
    nome: req.body.nome,
    descricao: req.body.descricao,
    data_horario_inicio: data_ini_full ,
    local: req.body.local,
    hora_fim: req.body.hora_fim,
    idEvento: req.body.eventoId
  },
  /*{
      where: {idEvento: req.params.eventoId}
  }*/).then(palestra => {    
    // Cria um Evento
    console.log("Criado o palestra!")
    res.send(palestra);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 

exports.findById = (req, res) => {  
    Palestra.findByPk(req.params.palestraId).then(palestra => {
      console.log("Achou o palestra pelo ID "+req.params.palestraId);
      res.send(palestra); //Retorna um Json para a Pagina da API
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };

  exports.findAll = (req, res) => {  
    Palestra.findAll({ raw: true}).then(palestra => {
      console.log("Listou Todos os Eventos!");
      res.send(palestra); //Retorna um Json para a Pagina da API
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };

  exports.atualiza = (req,res)=>{
    const data_ini_full = req.body.data_ini+"T"+req.body.hora_ini;
    Palestra.update(
      { nome: req.body.nome,
        descricao: req.body.descricao,
        data_horario_inicio: data_ini_full ,
        hora_fim: req.body.hora_fim,
        local: req.body.local},
      {where: {idpalestra: req.params.palestraId}}).then(palestra=>{
        console.log("Atualizando evento");
        res.send(palestra);
      }).catch(err=>{
        res.sendStatus(500).send("Error "+err);
      })
      
    },
  

  exports.delete = (req, res) => {  
    Palestra.destroy({ where: { idpalestra: req.params.palestraId } }).then(palestra => {
      console.log("Deletando o evento com o ID: "+req.params.palestraId);
      res.send(palestra); //Retorna um Json para a Pagina da API
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };