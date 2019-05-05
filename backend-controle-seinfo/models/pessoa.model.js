/*Referencia para os Tipos e Dados:
 https://sequelize.readthedocs.io/en/v3/docs/models-definition/ */

 module.exports = (sequelize, Sequelize) => {
    const Pessoa = sequelize.define('pessoa', {
    idPessoa: {
      type: Sequelize.INTEGER,
       primaryKey: true,
      autoIncrement: true, // tem que definir PK e Auto Increment
      },
    nome: {
        type: Sequelize.STRING
      },
    email: {
        type: Sequelize.STRING
      },
    CPF: {
        type: Sequelize.STRING
    },
    senha:{
      type: Sequelize.STRING
    },
    nivel:{
      type: Sequelize.INTEGER
    },
    classificacao:{
      type: Sequelize.INTEGER
    }
    },
    { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'pessoa',
      timestamps: false,
      createdAt: false,
    });
    
    Pessoa.associate = models => {
      models.pessoa.model.hasMany(models.protagonista.model, {
        foreignKey: 'idPessoa',
        sourceKey: 'idPessoa',
      });
      models.pessoa.model.hasMany(models.organizacao.model, {
        foreignKey: 'idPessoa',
        sourceKey: 'idPessoa',
      });
      models.pessoa.model.hasMany(models.inscricao.model, {
        foreignKey: 'idPessoa',
        sourceKey: 'idPessoa',
      });
    };


    return Pessoa;
  }
