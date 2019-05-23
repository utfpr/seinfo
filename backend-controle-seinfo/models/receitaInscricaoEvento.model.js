/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	const ReceitaEv =  sequelize.define('receitaInscricaoEvento', {
		idEvento: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'inscricaoEvento',
				key: 'idEvento'
			},
			field: 'idEvento'
		},
		idPessoa: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'inscricaoEvento',
				key: 'idPessoa'
			},
			field: 'idPessoa'
		},
		dataPagamento: {
			type: Sequelize.DATEONLY,
			allowNull: false,
			field: 'dataPagamento'
		}
	}, {
		tableName: 'receitaInscricaoEvento',
		timestamps: false,
      	createdAt: false,
	});

	ReceitaEv.associate = models =>{
		models.receitaInscricaoEvento.model.belongsTo(models.inscricaoEvento,{
			foreignKey: 'idEvento'
		}),
		models.receitaInscricaoEvento.model.belongsTo(models.inscricaoEvento,{
			foreignKey: 'idPessoa'
		})
	}

	return ReceitaEv;
};
