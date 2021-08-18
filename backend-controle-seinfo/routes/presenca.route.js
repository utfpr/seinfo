const app = require('express').Router();
const presencas = require('../controllers/presenca.controller');

app.get('/listPresenca', presencas.listPresenca);
app.post('/', async (req, res) => {
  try {
    const { idAtividade, idAgenda, idEvento, cpf } = req.body;
    const resp = presencas.create(idAtividade, idAgenda, idEvento, cpf);

    res.send(resp);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = app;
