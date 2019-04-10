const mysql = require('mysql');
//------------Função para Conectar ao Banco
function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
      host     : 'localhost',
      port     : 3306,
      user     : 'michel',
      password : 'password',
      database : 'seinfo'
    });
<<<<<<< HEAD:backend-controle-seinfo/models/banco.js

    connection.query(sqlQry, function(error, results, fields){
        if(error)
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
  }
=======
  
  connection.query(sqlQry, function(error, results, fields){
      if(error)
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}
>>>>>>> f519244ab44efe59196dac9a0345d2000f142c05:backend-controle-seinfo/banco/dbconnection.js


module.exports = {
  execSQLQuery,
};
