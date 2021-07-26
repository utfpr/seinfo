const multer = require('multer');
const multerConfig = require('../config/multerConfig');
const carossel = require('../controllers/carrossel.controller');

const upload = multer(multerConfig);

module.exports = (app) => {
  app.post('/api/carrossel', upload.single('urlImagem'), carossel.store);

  app.delete('/api/carrossel/:idCarrossel', carossel.delete);

  app.put('/api/carrossel/:idCarrossel', carossel.update);

  app.get('/api/getAllCarrossel', carossel.show);

  app.get('/api/getAllCarrosselAvailables', carossel.showAllAvailables);
};
