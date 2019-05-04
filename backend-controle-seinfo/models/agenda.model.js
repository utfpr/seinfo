module.exports = (sequelize, Sequelize) => {
    const Agenda = sequelize.define('agenda', {
    idAgenda: {
      type: Sequelize.INTEGER,
       primaryKey: true,
      autoIncrement: true, // tem que definir PK e Auto Increment
      },
    dataHoraInicio: {
        type: Sequelize.STRING
      },
    dataHoraFim: {
        type: Sequelize.STRING
      },
    local: {
        type: Sequelize.STRING
      },
    horasParticipacao: {
        type: Sequelize.STRING
      },

  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
    tableName: 'agenda',
    timestamps: false,
    createdAt: false,
  });
  
  Agenda.associate = models=>{
    models.agenda.model.hasMany(
        models.agendamentoEvento.model,{
            foreignKey: 'idAgenda'
        },
        models.agendamentoAtividade.model,{
            foreignKey: 'idAgenda'
        }
    )
  }

  return Agenda;
}
