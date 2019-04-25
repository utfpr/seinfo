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
    },
    { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'pessoa',
      timestamps: false,
      createdAt: false,
    });
    
    Pessoa.associate = models => {
        models.pessoa.model.hasMany(models.aluno.model, {
          foreignKey: 'idPessoa',
          sourceKey: 'idPessoa',
          as: 'Alunos',
        });
        models.pessoa.model.hasMany(models.convidado.model, {
          foreignKey: 'idPessoa',
          sourceKey: 'idPessoa',
          as: 'Convidados',
        });
      };


    return Pessoa;
  }
