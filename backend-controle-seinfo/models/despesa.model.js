module.exports = (sequelize, Sequelize) => {
    const Despesa = sequelize.define('despesa', {
      idDespesa: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'idDespesa'
      },
      descricao: {
        type: Sequelize.STRING(500),
        allowNull: false,
        field: 'descricao'
      },
      valorUnitario: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0',
        field: 'valorUnitario'
      },
      quantidade: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '1',
        field: 'quantidade'
      },
      idCaixa: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'caixa',
          key: 'idCaixa'
        },
        field: 'idCaixa'
      }
    },
  
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'despesa',
      timestamps: false,
      createdAt: false,
    });
    
    Despesa.associate = models => {
        
    models.despesa.model.belongsTo(models.caixa.model, {
        foreignKey: 'idCaixa',
        sourceKey: 'idCaixa',
      });
      };


    return Despesa;
  }
