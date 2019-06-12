var nomedoarquivo;
const express = require('express')
            , app = express()
            , multer = require('multer')
            , path = require('path');
            const storage = multer.diskStorage({
                destination: function (req, file, cb) {
                    cb(null, '../frontend-controle-seinfo/src/assets')
                },
                filename: function (req, file, cb) {
                  nomedoarquivo = file.originalname;
                    cb(null, file.originalname);
                }
            });
const upload = multer({storage});


module.exports = function(app) {
 
  const carossel = require('../controllers/carossel.controller.js');

  app.post('/api/carossel', upload.single('urlImagem'), function (req, res, next) {
    console.log("POST DO carossel!\n")
    carossel.create(req,res,nomedoarquivo);
  })

  // Insere um Novo Evento
 // app.post('/api/evento', eventos.create);

  //Procura um evento pelo ID
  app.get('/api/carossel/:carosselId', carossel.findById);

  // Procura todos os Eventos
  app.get('/api/carossels', carossel.findAll);

  // Update de um Evento pelo ID (Implementar)
  app.patch('/api/carossel/:eventoId', carossel.atualiza);

  // Deleta um evento pelo ID
  app.delete('/api/carossel/:eventoId', carossel.delete);
}
