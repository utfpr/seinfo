module.exports = (sequelize, Sequelize) => {
    const AgAtividade = sequelize.define('agendamentoAtividade', {
    idAtividade: {
      type: Sequelize.INTEGER,
       primaryKey: true,
      },
    idAgenda: {
        type: Sequelize.INTEGER,
         primaryKey: true,
    },

  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'agendamentoAtividade',
      timestamps: false,
      createdAt: false,
    });
    
    AgAtividade.associate = models => {
        
        models.agendamentoAtividade.model.belongsTo(models.atividade.model, {
            foreignKey: 'idAtividade',
            sourceKey: 'idAtividade',
          });

          models.agendamentoAtividade.model.belongsTo(models.agenda.model, {
            foreignKey: 'idAgenda',
            sourceKey: 'idAgenda',
          });


    };


    return AgAtividade;
  }