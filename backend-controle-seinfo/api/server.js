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
    password : 'root',
    database : 'seinfo'
  });

  connection.query(sqlQry, function(error, results, fields){
      if(error)
        console.log('deu erro');
      else
      console.log('deu bom');
      connection.end();
      console.log('executou!');
  });
}

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json(execSQLQuery(`select * from evento`)));
app.use('/', router);

router.get('/eventos/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE idEvento= ' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM evento' + filter, res);
});

router.post('/eventos', (req, res) =>{
  const nome = req.body.nome;
  const valor = req.body.valor;
  const data_ini = req.body.data_ini;
  const hora_ini = req.body.hora_ini;
  const data_fim = req.body.data_fim;
  const hora_fim = req.body.hora_fim;
  const descricao = req.body.descricao;
  
  const dataFull_Ini = data_ini+" "+hora_ini;
  const dataFull_fim = data_fim+" "+hora_fim;
  console.log("POST");
  

  execSQLQuery(`INSERT INTO evento(nome, valor, descricao, data_horario_inicio, data_hora_fim ) VALUES('${nome}','${valor}','${descricao}','${dataFull_Ini}','${dataFull_fim}')`, res);
  
});

router.patch('/eventos/:id?',(req,res)=>{
  const nome = req.body.nome;
  const valor = req.body.valor;
  const data_ini = req.body.data_ini;
  const hora_ini = req.body.hora_ini;
  const data_fim = req.body.data_fim;
  const hora_fim = req.body.hora_fim;
  const descricao = req.body.descricao;
  const dataFull_Ini = data_ini+" "+hora_ini;
  const dataFull_fim = data_fim+" "+hora_fim;
  execSQLQuery(`UPDATE evento set nome = '${nome}', valor='${valor}', descricao='${descricao}',data_horario_inicio='${dataFull_Ini}',data_hora_fim='${dataFull_fim}' WHERE idEvento=`+parseInt(req.params.id),res)
});

router.delete('/eventos/:id?',(req,res)=>{
  execSQLQuery('DELETE FROM evento WHERE idEvento=' + parseInt(req.params.id), res);
});


//minicurso
router.get('/eventos/:num?/minicurso/:id?',(req,res)=>{
  execSQLQuery('SELECT * FROM minicurso WHERE idMinicurso ='+parseInt(req.params.id)+' AND idEvento ='+parseInt(req.params.num),res)
});

router.post('/eventos/:num?/minicurso/',(req,res)=>{
  const nome = req.body.nome;
  const valor = req.body.valor;
  const data_ini = req.body.data_ini;
  const hora_ini = req.body.hora_ini;
  const data_fim = req.body.data_fim;
  const hora_fim = req.body.hora_fim;
  const descricao = req.body.descricao;
  const local = req.body.local;
  const dataFull_Ini = data_ini+" "+hora_ini;
  const dataFull_fim = data_fim+" "+hora_fim;
  execSQLQuery(`INSERT INTO minicurso (nome, valor, descricao, data_horario_inicio,local, data_hora_fim, idEvento ) VALUES('${nome}','${valor}','${descricao}','${dataFull_Ini}','${local}','${dataFull_fim}','${parseInt(req.params.num)}')`,res)
});

router.delete('/eventos/:num?/minicurso/:id?',(req,res)=>{
  execSQLQuery('DELETE FROM minicurso WHERE idMinicurso ='+parseInt(req.params.id)+' AND idEvento ='+parseInt(req.params.num),res)
});

router.patch('/eventos/:num?/minicurso/:id?',(req,res)=>{
  const nome = req.body.nome;
  const valor = req.body.valor;
  const data_ini = req.body.data_ini;
  const hora_ini = req.body.hora_ini;
  const data_fim = req.body.data_fim;
  const hora_fim = req.body.hora_fim;
  const descricao = req.body.descricao;
  const local = req.body.local;
  const dataFull_Ini = data_ini+" "+hora_ini;
  const dataFull_fim = data_fim+" "+hora_fim;
  execSQLQuery(`UPDATE minicurso set nome = '${nome}', valor='${valor}', descricao='${descricao}',data_horario_inicio='${dataFull_Ini}',data_hora_fim='${dataFull_fim}',local='${local}' WHERE idMinicurso=`+parseInt(req.params.id)+' AND idEvento='+parseInt(req.params.num),res)
});


//palestra
router.get('/eventos/:num?/palestra/:id?',(req,res)=>{
  execSQLQuery('SELECT * FROM palestra WHERE idpalestra ='+parseInt(req.params.id)+' AND idEvento ='+parseInt(req.params.num),res)
});

router.post('/eventos/:num?/palestra',(req,res)=>{
  const nome = req.body.nome;
  const data_ini = req.body.data_ini;
  const hora_ini = req.body.hora_ini;
  const data_fim = req.body.data_fim;
  const hora_fim = req.body.hora_fim;
  const descricao = req.body.descricao;
  const local = req.body.local;
  const dataFull_Ini = data_ini+" "+hora_ini;
  execSQLQuery(`INSERT INTO palestra (nome, descricao, data_horario_inicio, local, hora_fim, idEvento ) VALUES('${nome}','${descricao}','${dataFull_Ini}','${local}','${hora_fim}','${parseInt(req.params.num)}')`,res)
});

router.delete('/eventos/:num?/palestra/:id?',(req,res)=>{
  execSQLQuery('DELETE FROM palestra WHERE idpalestra ='+parseInt(req.params.id)+' AND idEvento='+parseInt(req.params.num),res)
})

router.patch('/eventos/:num?/palestra/:id?',(req,res)=>{
  const nome = req.body.nome;
  const data_ini = req.body.data_ini;
  const hora_ini = req.body.hora_ini;
  const data_fim = req.body.data_fim;
  const hora_fim = req.body.hora_fim;
  const descricao = req.body.descricao;
  const local = req.body.local;
  const dataFull_Ini = data_ini+" "+hora_ini;
  execSQLQuery(`UPDATE palestra set nome = '${nome}', descricao='${descricao}',data_horario_inicio='${dataFull_Ini}',hora_fim='${hora_fim}',local='${local}' WHERE idpalestra =`+parseInt(req.params.id)+' AND idEvento='+parseInt(req.params.num),res)
})


//pessoa
router.get('/pessoa/:id?',(req,res)=>{
  execSQLQuery('SELECT * FROM pessoa WHERE idPessoa ='+parseInt(req.params.id),res)
})
router.post('/pessoa',(req,res)=>{
  const nome = req.body.nome;
  const email = req.body.email;
  const cpf = req.body.cpf;
  execSQLQuery(`INSERT INTO pessoa (nome,email,CPF) VALUES('${nome}','${email}','${cpf}')`,res)
})
router.delete('/pessoa/:id?',(req,res)=>{
  execSQLQuery('DELETE FROM pessoa WHERE idPessoa ='+parseInt(req.params.id),res)
})
router.patch('/pessoa/:id?',(req,res)=>{
  const nome = req.body.nome;
  const email = req.body.email;
  const cpf = req.body.cpf;
  execSQLQuery(`UPDATE pessoa set nome = '${nome}', email ='${email}',CPF ='${cpf}'  WHERE idPessoa =`+parseInt(req.params.id),res)
  
})
/*

//receita
router.get()
router.post()
router.delete()
router.patch()


//despesa
router.get()
router.post()
router.delete()
router.patch()
*/

    
//inicia o servidor
app.listen(port);
console.log('API funcionando!');
