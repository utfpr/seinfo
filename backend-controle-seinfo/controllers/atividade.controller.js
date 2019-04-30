const db = require('../config/db.config.js');
const Atividades = db.atividades;
 
// Post do Atividade
exports.create = (req, res) => {

    Atividades.create({  

    valor: req.body.valor,
    descricao: req.body.descricao,
    local: req.body.local,
    dataHoraFim: req.body.dataHoraFim,
    horasParticipacao: req.body.horasParticipacao,
    idEvento: req.body.idEvento,
    idcategoria: req.body.idcategoria

  }).then(atividade => {    
    // Cria um Evento
    console.log("Criado uma categoria!")
    res.send(atividade);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 

exports.findById = (req, res) => {  
    Atividades.findByPk(req.params.atividadeId).then(atividade => {
      console.log("Achou uma atividade pelo ID "+req.params.atividadeId);
      res.send(atividade); //Retorna um Json para a Pagina da API
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };

  exports.findAll = (req, res) => {  
    Atividades.findAll({ raw: true}).then(atividade => {
      console.log("Listou Todas as Atividades!");
      res.send(atividade); //Retorna um Json para a Pagina da API
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };

  exports.atualiza = (req,res)=>{

    Atividades.update(
      {
        valor: req.body.nome,
        descricao: req.body.descricao,
        local: req.body.local,
        dataHoraFim: req.body.dataHoraFim,
        horasParticipacao: req.body.horasParticipacao,
        idEvento: req.body.idEvento,
        idcategoria: req.body.idcategoria
    },
      {where: {idAtividade: req.params.atividadeId}}).then(atividade=>{
        console.log("Atualizando uma Atividade");
        res.send(atividade);
      }).catch(err=>{
        res.status(500).send("Error "+err);
      })
      
    },
  

  exports.delete = (req, res) => {  
    Atividades.destroy({ where: { idAtividade: req.params.atividadeId } }).then(atividade => {
      console.log("Deletando uma Atividade com o ID: "+req.params.atividadeId);
      res.send(atividade); //Retorna um Json para a Pagina da API
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };

   exports.amoeba = (req, res) => {
     console.log("Função de Teste");
   };
