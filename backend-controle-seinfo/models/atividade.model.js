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
      dataHorarioInicio: {
        type: Sequelize.STRING
      },    
      local: {
        type: Sequelize.STRING
      },    
      dataHoraFim: {
        type: Sequelize.STRING
      },    
      horasParticipacao: {
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
      idcategoria:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'idcategoria',
          key: 'idcategoria',
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
          foreignKey: 'idcategoria'
        })
      }


    return Atividade;
  }
