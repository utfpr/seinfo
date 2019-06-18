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
    console.log("POST DO EVENTO!\n")
    eventos.create(req,res,nomedoarquivo);
  })

  // Insere um Novo Evento
 // app.post('/api/evento', eventos.create);

  //Procura um evento pelo ID
  app.get('/api/evento/:idEvento', eventos.findById);

  // Procura todos os Eventos
  app.get('/api/eventos', eventos.findAll);

  // Update de um Evento pelo ID (Implementar)
  app.patch('/api/evento/:idEvento', eventos.atualiza);

  // Deleta um evento pelo ID
  app.delete('/api/evento/:idEvento', eventos.delete);

  app.post('/api/organizacao/:idEvento/:idPessoa',eventos.criaOrganizacao);

  app.get('/api/organizacoes',eventos.selectOrganizacao);

  app.delete('/api/organizacao/:idEvento/:idPessoa',eventos.deleteOrganizacao);

}
