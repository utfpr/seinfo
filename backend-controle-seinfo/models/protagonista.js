module.exports = (sequelize, Sequelize) => {
    const Protagonista = sequelize.define('protagonista', {
    idPessoa: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'idPessoa',
        key: 'idPessoa',
      },
    },
    atuacao:{
      type: Sequelize.INTEGER
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
      tableName: 'protagonista',
      timestamps: false,
      createdAt: false,
    });
    
    Protagonista.associate = models => {
        
    models.protagonista.model.belongsTo(models.atividade.model, {
        foreignKey: 'idAtividade',
        sourceKey: 'idAtividade',
      });
      models.protagonista.model.belongsTo(models.pessoa.model, {
          foreignKey: 'idPessoa',
          sourceKey: 'idPessoa',
        });
    };
      

    return Protagonista;
  }