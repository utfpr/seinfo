module.exports = (sequelize, Sequelize) => {
    const Protagonista = sequelize.define('protagonista', {
      idPessoa: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'pessoa',
          key: 'idPessoa'
        },
        field: 'idPessoa'
      },
      idAtividade: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'atividade',
          key: 'idAtividade'
        },
        field: 'idAtividade'
      },
      atuacao: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: 'atuacao'
      }
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