//--------------Constantes ----------------
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//------------Função para Conectar ao Banco
function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : '',
    database : 'seinfo'
  });

  connection.query(sqlQry, function(error, results, fields){
      if(error)
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

router.get('/eventos/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idEvento=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM evento' + filter, res);
})

router.post('/eventos', (req, res) =>{
    const nome = req.body.nome;
    const valor = req.body.valor;
    const data_ini = req.body.data_ini;
    const hora_ini = req.body.hora_ini;
    const data_fim = req.body.data_fim;
    const hora_fim = req.body.hora_fim;
    const descricao = req.body.descricao;

    console.log("POST");
    console.log(valor);
    const dataFull_Ini = data_ini+" "+hora_ini;
    const dataFull_fim = data_fim+" "+hora_fim;
    console.log(descricao);

    execSQLQuery(`INSERT INTO evento(nome, valor, descricao, data_horario_inicio, data_hora_fim ) VALUES('${nome}','${valor}','${descricao}','${dataFull_Ini}','${dataFull_fim}')`, res);

    });

//inicia o servidor
app.listen(port);
console.log('API funcionando!');
