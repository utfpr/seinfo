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
 
  const eventos = require('../controllers/evento.controller.js');

  app.post('/api/evento', upload.single('urlImagem'), function (req, res, next) {

    eventos.create(req,res,nomedoarquivo);
  })

  // Insere um Novo Evento
 // app.post('/api/evento', eventos.create);

  //Procura um evento pelo ID
  app.get('/api/evento/:eventoId', eventos.findById);

  // Procura todos os Eventos
  app.get('/api/eventos', eventos.findAll);

  // Update de um Evento pelo ID (Implementar)
  app.patch('/api/evento/:eventoId', eventos.atualiza);

  // Deleta um evento pelo ID
  app.delete('/api/evento/:eventoId', eventos.delete);
}
