/*Referencia para os Tipos e Dados:
 https://sequelize.readthedocs.io/en/v3/docs/models-definition/ */

 module.exports = (sequelize, Sequelize) => {
    const Aluno = sequelize.define('aluno', {
    RA: {
      type: Sequelize.INTEGER,
       primaryKey: true,
      autoIncrement: true, // tem que definir PK e Auto Increment
      },
    senha: {
        type: Sequelize.STRING
      },
    idPessoa: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'idPessoa',
        key: 'idPessoa',
      },
    },
  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'aluno',
      timestamps: false,
      createdAt: false,
    });
    
    Aluno.associate = models => {
        
    models.aluno.model.belongsTo(models.pessoa.model, {
        foreignKey: 'idPessoa',
        sourceKey: 'idPessoa',
      });
      };


    return Aluno;
  }
