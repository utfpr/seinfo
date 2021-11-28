const app = require('express').Router();
const presencas = require('../controllers/presenca.controller');

app.get('/listPresenca', presencas.listPresenca);
app.post('/', async (req, res) => {
  try {
    const { idAtividade, idAgenda, idEvento, cpf, presenca } = req.body;
    const resp = presencas.createOrUpdate(
      idAtividade,
      idAgenda,
      idEvento,
      cpf,
      presenca
    );

    res.send(resp);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get('/verificar/:CPF/:idAtividade', presencas.verificaPresenca);


module.exports = app;
