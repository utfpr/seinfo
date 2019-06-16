const db = require('../models/index.js');
const Atividades = db.atividade;
 
// Post do Atividade
exports.create = (req, res) => {
  const data_ini_full = req.body.data_ini+"T"+req.body.hora_ini;
  const data_fim_full = req.body.data_fim+"T"+req.body.hora_fim;
    Atividades.create({  
    titulo:req.body.titulo,
    valor: req.body.valor,
    descricao: req.body.descricao,
    horasParticipacao: req.body.horasParticipacao,
    quantidadeVagas:req.body.vagas,
    idEvento: req.body.idEvento,
    idCategoria: req.body.idCategoria

  }).then(atividade => {
    atividade.createAtvAgenda({'dataHoraInicio':data_ini_full,'dataHoraFim':data_fim_full,'local':req.body.local})    
    // Cria um Evento
    console.log("Criado uma categoria!")
    res.send(atividade);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
 


exports.findById = (req, res) => {  
  Atividades.findOne({where:{idAtividade: req.params.atividadeId},include:[{model:db.categoria,as:'categoriaAtv'}]}).then(atividade => {
    console.log("Achou uma atividade pelo ID "+req.params.atividadeId);
    res.send(atividade); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.findAll = (req, res) => {  
  Atividades.findAll({ raw: true,include:[{model:db.categoria,as:'categoriaAtv'}]}).then(atividade => {
    console.log("Listou Todas as Atividades!");
    res.send(atividade); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.atualiza = (req,res)=>{

  Atividades.update(
    {
      titulo:req.body.titulo,
      valor: req.body.valor,
      descricao: req.body.descricao,
      horasParticipacao: req.body.horasParticipacao,
      quantidadeVagas:req.body.vagas,
  },
    {where: {idAtividade: req.params.atividadeId}}).then(atividade=>{    
      console.log("Atualizando uma Atividade");
      res.send(atividade);
    }).catch(err=>{
      res.status(500).send("Error "+err);
    })
    
  },
  

exports.delete = (req, res) => {
  Atividades.findOne({where:{idAtividade: req.params.atividadeId}}).then(atividade => {
    db.agendamentoAtividade.findOne({where:{idAtividade:req.params.atividadeId}}).then(agenda=>{
      db.agenda.destroy({where:{idAgenda:agenda.idAgenda}})
      agenda.destroy()
    })
    db.protagonista.destroy({where:{idAtividade:req.params.atividadeId}})
    atividade.destroy({where:{idAtividade: req.params.atividadeId}})
    console.log("Achou uma atividade pelo ID "+req.params.atividadeId);
    res.send('deletou'); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })  
};

//-------------------------------------------------------------------------------------------

exports.criarProtagonista = (req,res)=>{
  Atividades.findOne({where:{idAtividade: req.params.atividadeId}}).then(atividade => {
    db.pessoa.findOne({where:{idPessoa: req.params.idPessoa}}).then(pessoa=>{
      db.protagonista.create({'atuacao':req.body.atuacao,'idAtividade':atividade.idAtividade,'idPessoa':pessoa.idPessoa}).then(prot=>{
        res.send(prot)
      })      
      //atividade.createAtividadeProt({'atuacao':req.body.atuacao,'idAtividade':atividade.idAtividade,'idPessoa':pessoa.idPessoa})
    }).catch(err=>{
      res.status(500).send("Error -> " + err);
    })
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
}

exports.selectProtagonista=(req,res)=>{
  db.protagonista.findAll({raw:true}).then(prot=>{
    res.send(prot)
  })
  /*db.protagonista.findOne({where:{idAtividade:req.params.idAtividade,idPessoa:req.params.idPessoa}}).then(prot=>{
    res.send(prot)
  })*/
}

exports.deletaProtagonista=(req,res)=>{
  db.protagonista.destroy({where:{idAtividade:req.params.idAtividade,idPessoa:req.params.idPessoa}}).then(prot=>{
    res.send('sumiu')
  })
}