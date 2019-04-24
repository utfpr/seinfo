module.exports = (sequelize, Sequelize) => {
    const Palestra = sequelize.define('palestra', {
    idpalestra: {
      type: Sequelize.INTEGER,
       primaryKey: true,
      autoIncrement: true, // tem que definir PK e Auto Increment
      },
    nome: {
        type: Sequelize.STRING
      },
    descricao: {
        type: Sequelize.STRING
      },
    data_horario_inicio: {
        type: Sequelize.STRING
    },
    local:{
        type: Sequelize.STRING
    },
    hora_fim: {
        type: Sequelize.STRING
    },
    idEvento:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
        model: 'idEvento',
        key: 'idEvento',
      },
    }
    },
    { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'palestra',
      timestamps: false,
      createdAt: false,
    });
    
    Palestra.associate = models=> {
      models.palestra.model.belongsTo(models.evento.model,{
        foreignKey: 'idEvento'
      })
    }
    

    return Palestra;
  }
