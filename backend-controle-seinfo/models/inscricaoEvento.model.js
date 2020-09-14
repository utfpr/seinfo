/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	const InscricaoE =  sequelize.define('inscricaoEvento', {
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
		CPF: {
			type: Sequelize.STRING(64),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'pessoa',
				key: 'CPF'
			},
			field: 'CPF'
		},
		dataInscricao: {
			type: Sequelize.DATEONLY,
			allowNull: false,
			field: 'dataInscricao'
		}
	}, {
		tableName: 'inscricaoEvento',
		timestamps: false,
      	createdAt: false,
	});

	InscricaoE.associate = models => {
		models.inscricaoEvento.belongsTo(models.pessoa,{
			as:'pessoaInsc',
			foreignKey: 'CPF',
		}),
		models.inscricaoEvento.belongsTo(models.evento,{
			as:'eventoInsc',
			foreignKey: 'idEvento',
		}),
		models.inscricaoEvento.hasOne(models.receitaInscricaoEvento,{
			as:'receitaInscEv',
			foreignKey: 'idEvento',
		}),
		models.inscricaoEvento.hasOne(models.receitaInscricaoEvento,{
			as:'receitaInscPe',
			foreignKey: 'CPF',
		}),
		models.inscricaoEvento.hasOne(models.inscricaoAtividade,{
			as:'inscAtvPe',
			foreignKey: 'CPF',
		}),
		models.inscricaoEvento.hasOne(models.inscricaoAtividade,{
			as:'inscAtvEv',
			foreignKey: 'idEvento',
		})
	} 

	return InscricaoE;
};
