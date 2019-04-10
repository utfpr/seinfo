const express = require('express');
//const { body, param, validationResult } = require('express-validator/check');
const eventoController = require('../controllers/evento');

const router = express.Router();


router.get('/', (req, res) =>{
    eventoController.executarSelection(res);
 
    // let filter = '';
    // if(req.params.id) filter = ' WHERE idEvento= ' + parseInt(req.params.id);
    // execSQLQuery('SELECT * FROM evento' + filter, res);
});


router.post('/', (req, res) =>{


    const nome = req.body.nome;
    const valor = req.body.valor;

    const data_ini = req.body.data_ini;
    const hora_ini = req.body.hora_ini;
    const data_fim = req.body.data_fim;
    const hora_fim = req.body.hora_fim;

    const descricao = req.body.descricao;
    
    const dataFull_Ini = data_ini+" "+hora_ini;
    const dataFull_fim = data_fim+" "+hora_fim;
    
  
    eventoController.executaPost(nome, valor, dataFull_Ini, dataFull_fim, descricao,res);
  });

module.exports = router;