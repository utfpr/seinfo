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
			type: Sequelize.STRING(64),
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
		models.participaAtividade.belongsTo(models.receitaInscricaoAtividade,{
			as:'EventoRec',
			foreignKey: 'idEvento'
		}),
		models.participaAtividade.belongsTo(models.receitaInscricaoAtividade,{
			as:'PessoaRec',
			foreignKey: 'idPessoa'
		}),
		models.participaAtividade.belongsTo(models.receitaInscricaoAtividade,{
			as:'AtividadeRec',
			foreignKey: 'idAtividade'
		})
	}

	return ParticipaAtv;
};
