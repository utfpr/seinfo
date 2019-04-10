
const banco = require('../banco/dbconnection');

const executarSelection = async (res) => {
    console.log("Executar o GET");
    banco.execSQLQuery('SELECT * FROM evento', res);
  };

const executarDeletar = async (id,res) => {
    console.log("Executar um DELETE");
    banco.execSQLQuery('DELETE FROM evento WHERE idEvento=' +id, res);
    //banco.execSQLQuery('SELECT * FROM evento', res);
  };

const executarUpdate = async (nome, valor, descricao, data_horario_inicio, data_hora_fim, id, res) => {
    console.log("Executar um UPDATE");
    banco.execSQLQuery(`UPDATE evento set nome='${nome}',valor='${valor}',descricao='${descricao}',data_horario_inicio='${dataFull_Ini}',data_hora_fim='${dataFull_fim}' WHERE idEvento=` +id, res);
    
  };

const executaPost = async(nome, valor, dataFull_Ini, dataFull_fim, descricao,res)=>{
    console.log("Executar POST");
    banco.execSQLQuery(`INSERT INTO evento(nome, valor, descricao, data_horario_inicio, data_hora_fim ) VALUES('${nome}','${valor}','${descricao}','${dataFull_Ini}','${dataFull_fim}')`, res);
}

module.exports = {
    executarSelection,
    executaPost,
    executarDeletar,
    executarUpdate,
  };
