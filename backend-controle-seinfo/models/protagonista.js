module.exports = (sequelize, Sequelize) => {
    const Orador = sequelize.define('orador', {
    idPessoa: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'idPessoa',
        key: 'idPessoa',
      },
      },
    
    idAtividade: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'idAtividade',
        key: 'idAtividade',
      },
    },
  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'orador',
      timestamps: false,
      createdAt: false,
    });
    
    Orador.associate = models => {
        
    models.orador.model.belongsTo(models.atividade.model, {
        foreignKey: 'idAtividade',
        sourceKey: 'idAtividade',
      });
      models.orador.model.belongsTo(models.pessoa.model, {
          foreignKey: 'idPessoa',
          sourceKey: 'idPessoa',
        });
    };
      

    return Orador;
  }