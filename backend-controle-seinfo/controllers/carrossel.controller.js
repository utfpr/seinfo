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