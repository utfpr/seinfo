module.exports = (sequelize, Sequelize) => {
    const Evento = sequelize.define('evento', {
    idEvento: {
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
    data_hora_fim: {
        type: Sequelize.STRING
    },
    },
    { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'evento',
      timestamps: false,
      createdAt: false,
    });
    
    return Evento;
  }