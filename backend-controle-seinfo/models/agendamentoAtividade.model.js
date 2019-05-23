module.exports = (sequelize, Sequelize) => {
    const AgAtividade = sequelize.define('agendamentoAtividade', {
      idAtividade: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'atividade',
          key: 'idAtividade'
        },
        field: 'idAtividade'
      },
      idAgenda: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'agenda',
          key: 'idAgenda'
        },
        field: 'idAgenda'
      },
      horasParticipacao: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: '00:00:00',
        field: 'horasParticipacao'
      },
      quantidadeVagas: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        field: 'quantidadeVagas'
      }
  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'agendamentoAtividade',
      timestamps: false,
      createdAt: false,
    });
    
    AgAtividade.associate = models => {
        //adiciona idAtividade (vindo da tabela atividade) na tabela agendamentoAtividade
        models.agendamentoAtividade.model.belongsTo(models.atividade.model, {
            foreignKey: 'idAtividade',
            sourceKey: 'idAtividade',
          });
          //adiciona idAgenda (vindo da tabela agenda) na tabela agendamentoAtividade
          models.agendamentoAtividade.model.belongsTo(models.agenda.model, {
            foreignKey: 'idAgenda',
            sourceKey: 'idAgenda',
          });


    };


    return AgAtividade;
  }