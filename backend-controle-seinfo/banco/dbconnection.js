const mysql = require('mysql');
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
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
  }

module.exports = {
  execSQLQuery,
};
