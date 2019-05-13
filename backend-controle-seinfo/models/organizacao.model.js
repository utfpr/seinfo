module.exports = (sequelize, Sequelize) => {
    const Organizacao = sequelize.define('organizacao', {
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
      horasParticipacao: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: '00:00:00',
        field: 'horasParticipacao'
      }
  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'organizacao',
      timestamps: false,
      createdAt: false,
    });
    
    Organizacao.associate = models => {
        
    models.organizacao.model.belongsTo(models.evento.model, {
        foreignKey: 'idEvento',
        sourceKey: 'idEvento',
      });
      models.organizacao.model.belongsTo(models.pessoa.model, {
          foreignKey: 'idPessoa',
          sourceKey: 'idPessoa',
        });
    };
      

    return Organizacao;
  }