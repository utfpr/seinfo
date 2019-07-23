const db = require('../models/index.js');
const Carrossel = db.carrossel;
 
// Post do Evento
exports.create = (req, res) => {
   
    Carrossel.create({
      
    status: req.status,
    idImagem: req.imagem

  }).then(agevento => {    
    // Cria um Evento
    console.log("Criado o Carrossel!")
    res.send(agevento);
  }).catch(err => {
    console.log("Console -> " + err);
  })
};

exports.delete = (req,res)=>{
  Carrossel.destroy(
    {where:{ idCarrossel: req.params.idCarrossel}}).then(car=>{
    res.send('morreu')
  }).catch(err=>{
    res.status(500).send("Error "+err)
  })
}

exports.atualiza = (req,res)=>{
  Carrossel.update({
    status: req.status,
    idImagem: req.imagem
  },{where:{ idCarrossel: req.params.idCarrossel}}).then(car=>{
    res.send(car)
  }).catch(err=>{
    res.status(500).send("Error "+err)
  })
}

exports.selectCarrossel = (req,res)=>{
  Carrossel.findOne(
    {where:{ idCarrossel: req.params.idCarrossel}}).then(car=>{
    res.send(car)
  }).catch(err=>{
    res.status(500).send("Error "+err)
  })
}

exports.selectTodosCarrossel = (req,res)=>{
  Carrossel.findAll().then(car=>{
    res.send(car)
  }).catch(err=>{
    res.status(500).send("Error "+err)
  })
}