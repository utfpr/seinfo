const db = require('../models/index.js');
const Lotes = db.lote;
 
// Post do Evento
exports.create = (req, res) => {

  Lotes.create({  
    //idEvento: req.body.idEvento,
    valor: req.body.valor,
    dataAbertura: req.body.dataAbertura,
    dataFechamento: req.body.dataFechamento,
    idEvento: req.body.idEvento
  }).then(lote => {    
    // Cria um Evento
    console.log("Criado o Lote!")
    res.send(lote);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};


exports.findById = (req, res) => {  
  Lotes.findByPk(req.params.loteId).then(lote => {
    console.log("Achou o lote pelo ID "+req.params.loteId);
    res.send(lote); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.findAll = (req, res) => {  
  Lotes.findAll({ raw: true}).then(lote => {
    console.log("Listou Todos os Lotes!");
    res.send(lote); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.atualiza = (req,res)=>{

  Lotes.update(
    {
      valor: req.body.valor,
      dataAbertura: req.body.dataAbertura,
      dataFechamento: req.body.dataFechamento,
      idEvento: req.body.idEvento
  },
    {where: {idLote: req.params.loteId}}).then(lote=>{
      console.log("Atualizando Lote");
      res.send(lote);
    }).catch(err=>{
      res.status(500).send("Error "+err);
    })
    
  },
  

exports.delete = (req, res) => {  
  Lotes.destroy({ where: { idLote: req.params.loteId } }).then(lote => {
    console.log("Deletando o lote com o ID: "+req.params.loteId);
    res.send(lote); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.amoeba = (req, res) => {
  console.log("Função de Teste");
};
