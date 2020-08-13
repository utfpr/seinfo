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
		CPF: {
			type: Sequelize.STRING(64),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'inscricaoEvento',
				key: 'CPF'
			},
			field: 'CPF'
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
		models.receitaInscricaoEvento.belongsTo(models.inscricaoEvento,{
			as:'evRecInsc',
			foreignKey: 'idEvento',
			onUpdate: 'cascade',
			onDelete: 'cascade',
		}),
		models.receitaInscricaoEvento.belongsTo(models.inscricaoEvento,{
			as:'peRecInsc',
			foreignKey: 'CPF',
			onUpdate: 'cascade',
			onDelete: 'cascade',
		})
	}

	return ReceitaEv;
};
