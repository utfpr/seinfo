const app = require('express').Router();
const multer = require('multer');
const carossel = require('../controllers/carrossel.controller');
const multerConfig = require('../config/multerConfig');

const upload = multer(multerConfig);

// store
app.post('/', upload.single('urlImagem'), carossel.store);
// /api/carrossel

// delete
app.delete('/:idCarrossel', carossel.delete);
// /api/carrossel/:idCarrossel

// update
app.put('/:idCarrossel', carossel.update);
// /api/carrossel/

// show
app.get('/getAllCarrossel', carossel.show);
// /api/getAllCarrossel

module.exports = app;
