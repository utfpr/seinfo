module.exports = (sequelize, Sequelize) => {
    const Atividade = sequelize.define('atividade', {
      idAtividade: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, // tem que definir PK e Auto Increment
      },
      valor: {
        type: Sequelize.FLOAT
      },
      descricao: {
        type: Sequelize.STRING
      },    
      idEvento:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'idEvento',
          key: 'idEvento',
        },
      },
      idCategoria:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'idCategoria',
          key: 'idCategoria',
        },
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
      }


    return Atividade;
  }
