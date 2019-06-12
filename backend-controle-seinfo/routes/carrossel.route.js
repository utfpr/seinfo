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
 
  const carossel = require('../controllers/carrossel.controller.js');
  const imagem = require('../controllers/imagem.controller.js');

  app.post('/api/carrossel', upload.single('urlImagem'), function (req, res, next) {
    console.log("POST DO carossel!\n")
    console.log("\n\n\n STATUS: "+req.body.select_status);
    imagem.create(req,res,nomedoarquivo);
  })

}
