
module.exports = (sequelize, Sequelize) => {
    const Minicurso = sequelize.define('minicurso', {
    idMinicurso: {
      type: Sequelize.INTEGER,
       primaryKey: true,
      autoIncrement: true, // tem que definir PK e Auto Increment
      },
    nome: {
        type: Sequelize.STRING
      },
    valor: {
        type: Sequelize.DOUBLE
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
    data_hora_fim: {
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
      tableName: 'minicurso',
      timestamps: false,
      createdAt: false,
    });

    Minicurso.associate = models=> {
      models.minicurso.model.belongsTo(models.evento.model,{
        foreignKey: 'idEvento'
      })
    }
    
    return Minicurso;
  }

