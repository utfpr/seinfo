
const banco = require('../banco/dbconnection');

const executarSelection = async (res) => {
    console.log("Executar o GET");
    banco.execSQLQuery('SELECT * FROM evento', res);
  };

  //execSQLQuery(`INSERT INTO evento(nome, valor, descricao, data_horario_inicio, data_hora_fim ) VALUES('${nome}','${valor}','${descricao}','${dataFull_Ini}','${dataFull_fim}')`, res);
    
const executaPost = async(nome, valor, dataFull_Ini, dataFull_fim, descricao,res)=>{
    console.log("Executar POST");
    banco.execSQLQuery(`INSERT INTO evento(nome, valor, descricao, data_horario_inicio, data_hora_fim ) VALUES('${nome}','${valor}','${descricao}','${dataFull_Ini}','${dataFull_fim}')`, res);

}

module.exports = {
    executarSelection,
    executaPost
  };

  