module.exports = (sequelize, Sequelize) => {
    const Atividade = sequelize.define('atividade', {
      idAtividade: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'idAtividade'
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0',
        field: 'valor'
      },
      descricao: {
        type: Sequelize.STRING(5000),
        allowNull: true,
        field: 'descricao'
      },
      idEvento: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'evento',
          key: 'idEvento'
        },
        field: 'idEvento'
      },
      idCategoria: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'categoria',
          key: 'idCategoria'
        },
        field: 'idCategoria'
      }
    },
  
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'atividade',
      timestamps: false,
      createdAt: false,
    });
    
    Atividade.associate = models=> {
        models.atividade.model.belongsTo(models.evento.model,{
          foreignKey: 'idEvento'
        })
        models.atividade.model.belongsTo(models.categoria.model,{
          foreignKey: 'idCategoria'
        })
        models.atividade.model.hasMany(models.agendamentoAtividade.model,{
          foreignKey: 'idAtividade'
        })
        models.atividade.model.hasMany(models.inscricaoAtividade.model,{
          foreignKey: 'idAtividade'
        })
        models.atividade.model.hasMany(models.protagonista.model,{
          foreignKey: 'idAtividade'
        })
      }


    return Atividade;
  }
