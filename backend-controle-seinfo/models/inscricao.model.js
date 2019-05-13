module.exports = (sequelize, Sequelize) => {
    const Inscricao = sequelize.define('inscricao', {
      idEvento: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'evento',
          key: 'idEvento'
        },
        field: 'idEvento'
      },
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
      pagamentoInscricao: {
        type: Sequelize.INTEGER(4),
        allowNull: false,
        defaultValue: '0',
        field: 'pagamentoInscricao'
      }
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
    models.inscricao.model.hasMAny(models.participaAtividade.model, {
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