/*Referencia para os Tipos e Dados:
 https://sequelize.readthedocs.io/en/v3/docs/models-definition/ */

 module.exports = (sequelize, Sequelize) => {
    const Convidado = sequelize.define('convidado', {
    senha: {
        type: Sequelize.STRING
      },
    idPessoa: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'idPessoa',
        key: 'idPessoa',
      },
    },
  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'convidado',
      timestamps: false,
      createdAt: false,
    });
    
    Convidado.associate = models => {
        
    models.convidado.model.belongsTo(models.pessoa.model, {
        foreignKey: 'idPessoa',
        sourceKey: 'idPessoa',
      });
      };


    return Convidado;
  }
