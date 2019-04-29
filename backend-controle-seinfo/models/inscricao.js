module.exports = (sequelize, Sequelize) => {
    const Inscricao = sequelize.define('inscricao', {
    idPessoa: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'idPessoa',
        key: 'idPessoa',
      },
      },
    
    idEvento: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'idEvento',
        key: 'idEvento',
      },
    },
    pagamentoInscricao: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'inscricao',
      timestamps: false,
      createdAt: false,
    });
    
    Inscricao.associate = models => {
        
    models.inscricao.model.belongsTo(models.evento.model, {
        foreignKey: 'idEvento',
        sourceKey: 'idEvento',
      });
      models.inscricao.model.belongsTo(models.pessoa.model, {
          foreignKey: 'idPessoa',
          sourceKey: 'idPessoa',
        });
        models.inscricao.model.hasMAny(models.inscricao.model, {
          foreignKey: 'idPessoa',
          sourceKey: 'idPessoa',
        });
        models.inscricao.model.hasMAny(models.receitaEvento.model, {
          foreignKey: 'idPessoa',
          sourceKey: 'idPessoa',
        });
    };
      

    return Inscricao;
  }