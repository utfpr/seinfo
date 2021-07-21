let nomedoarquivo;
const multer = require('multer');
const carossel = require('../controllers/carrossel.controller');
const imagem = require('../controllers/imagem.controller');

const storage = require('../config/multerConfig');

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, '../frontend-controle-seinfo/src/assets');
//   },
//   filename(req, file, cb) {
//     nomedoarquivo = file.originalname;
//     cb(null, file.originalname);
//   },
// });

const upload = multer({ storage });

module.exports = (app) => {
  // cria um carrossel
  app.post('/api/carrossel', upload.single('urlImagem'), carossel.create);

  app.delete('/api/carrossel/:idCarrossel', carossel.delete);

  app.patch('/api/carrossel/:idCarrossel', carossel.atualiza);

  app.get('/api/carrossel', carossel.selectTodosCarrossel);

  app.get('/api/carrossel/:idCarrossel', carossel.selectCarrossel);
};
