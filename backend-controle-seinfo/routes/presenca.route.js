const presencas = require('../controllers/presenca.controller');

module.exports = (app) => {
  app.get('/api/presenca/listPresenca', presencas.listPresenca);
};
