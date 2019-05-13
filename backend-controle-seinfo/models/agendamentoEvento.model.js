module.exports = (sequelize, Sequelize) => {
  const AgEvento = sequelize.define('agendamentoEvento', {
    idEvento: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'evento',
				key: 'idEvento'
			},
			field: 'idEvento'
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
		}

    },
    { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'agendamentoEvento',
      timestamps: false,
      createdAt: false,
    }
  );
  
      
  AgEvento.associate = models => {
    models.agendamentoEvento.model.belongsTo(models.evento.model, {
        foreignKey: 'idEvento',
        sourceKey: 'idEvento',
      }
    );

    models.agendamentoEvento.model.belongsTo(models.agenda.model, {
        foreignKey: 'idAgenda',
        sourceKey: 'idAgenda',
      }
    );
  };

  return AgEvento;
}
