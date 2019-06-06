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
			type: Sequelize.STRING(64),
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
		models.receitaInscricaoAtividade.belongsTo(models.inscricaoAtividade,{
			as:'receitaInscrito',
			foreignKey: 'idPessoa'
		}),
		models.receitaInscricaoAtividade.belongsTo(models.inscricaoAtividade,{
			as:'receitaAtv',
			foreignKey: 'idAtividade'
		}),
		models.receitaInscricaoAtividade.belongsTo(models.inscricaoAtividade,{
			as:'receitaInscEv',
			foreignKey: 'idEvento'
		}),
		models.receitaInscricaoAtividade.hasOne(models.participaAtividade,{
			as:'participacaoEv',
			foreignKey: 'idEvento'
		}),
		models.receitaInscricaoAtividade.hasOne(models.participaAtividade,{
			as:'participacaoPes',
			foreignKey: 'idPessoa'
		}),
		models.receitaInscricaoAtividade.hasOne(models.participaAtividade,{
			as:'participacaoAtv',
			foreignKey: 'idAtividade'
		})
	}

	return ReceitaAtv;
};
