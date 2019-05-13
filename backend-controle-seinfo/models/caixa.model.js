module.exports = (sequelize, Sequelize) => {
    const Caixa = sequelize.define('caixa', {
      idCaixa: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'idCaixa'
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
      tableName: 'caixa',
      timestamps: false,
      createdAt: false,
    });
    
    Caixa.associate = models => {

          models.caixa.model.belongsTo(models.evento.model, {
            foreignKey: 'idEvento',
            sourceKey: 'idEvento',
          });
          models.caixa.model.hasMany(models.despesa.model, {
            foreignKey: 'idDespesa',
            sourceKey: 'idDespesa',
          })
          models.caixa.model.hasMany(models.receita.model, {
            foreignKey: 'idReceita',
            sourceKey: 'idReceita',
          })


    };


    return Caixa;
  }