module.exports = (sequelize, Sequelize) => {
    const Lote = sequelize.define('lote', {
      idLote: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'idLote'
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0',
        field: 'valor'
      },
      dataAbertura: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: 'dataAbertura'
      },
      dataFechamento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: 'dataFechamento'
      },
      idEvento: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'evento',
          key: 'idEvento'
        },
        field: 'idEvento'
      }
  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'lote',
      timestamps: false,
      createdAt: false,
    });
    
    Lote.associate = models => {
        
      models.lote.model.belongsTo(models.evento.model, {
        foreignKey: 'idEvento',
        sourceKey: 'idEvento',
      });
      models.lote.model.hasMany(models.inscricaoEvento.model, {
        foreignKey: 'idLote',
        sourceKey: 'idLote',
      });
      };


    return Lote;
  }
