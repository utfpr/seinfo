/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	const ReceitaAtv =  sequelize.define('receitaInscricaoAtividade', {
		idEvento: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'inscricaoAtividade',
				key: 'idEvento'
			},
			field: 'idEvento'
		},
		idPessoa: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'inscricaoAtividade',
				key: 'idPessoa'
			},
			field: 'idPessoa'
		},
		idAtividade: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'inscricaoAtividade',
				key: 'idAtividade'
			},
			field: 'idAtividade'
		},
		dataPagamento: {
			type: Sequelize.DATEONLY,
			allowNull: false,
			field: 'dataPagamento'
		}
	}, {
		tableName: 'receitaInscricaoAtividade',
		timestamps: false,
      	createdAt: false,
	});

	ReceitaAtv.associate = models =>{
		models.receitaInscricaoAtividade.model.belongsTo(models.inscricaoAtividade.model,{
			foreignKey: 'idPessoa'
		}),
		models.receitaInscricaoAtividade.model.belongsTo(models.inscricaoAtividade.model,{
			foreignKey: 'idAtividade'
		}),
		models.receitaInscricaoAtividade.model.belongsTo(models.inscricaoAtividade.model,{
			foreignKey: 'idEvento'
		})
	}

	return ReceitaAtv;
};
