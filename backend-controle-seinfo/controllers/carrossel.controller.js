const db = require('../models/index.js');
const Carrossel = db.carrossel;
 
// Post do Evento
exports.create = (req, res) => {
    //console.log("Dentro de Evento Imagem: \nidEvento = "+req.evento+"\n idImagem: "+req.imagem)
    Carrossel.create({
      
    status: req.status,
    idImagem: req.imagem

  }).then(agevento => {    
    // Cria um Evento
    console.log("Criado o eventoImagem!")
    res.send(agevento);
  }).catch(err => {
    console.log("Console -> " + err);
  })
};
 

