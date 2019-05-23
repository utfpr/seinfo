/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	const ParticipaAtv = sequelize.define('participaAtividade', {
		idEvento: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'receitaInscricaoAtividade',
				key: 'idEvento'
			},
			field: 'idEvento'
		},
		idPessoa: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'receitaInscricaoAtividade',
				key: 'idPessoa'
			},
			field: 'idPessoa'
		},
		idAtividade: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'receitaInscricaoAtividade',
				key: 'idAtividade'
			},
			field: 'idAtividade'
		},
		presenca: {
			type: Sequelize.INTEGER(4),
			allowNull: false,
			defaultValue: '0',
			field: 'presenca'
		}
	}, {
		tableName: 'participaAtividade',
		timestamps: false,
      	createdAt: false,
	});

	ParticipaAtv.associate = models => {
		models.participaAtividade.model.belongsTo(models.receitaInscricaoAtividade.model,{
			foreignKey: 'idEvento'
		}),
		models.participaAtividade.model.belongsTo(models.receitaInscricaoAtividade.model,{
			foreignKey: 'idPessoa'
		}),
		models.participaAtividade.model.belongsTo(models.receitaInscricaoAtividade.model,{
			foreignKey: 'idAtividade'
		})
	}

	return ParticipaAtv;
};
