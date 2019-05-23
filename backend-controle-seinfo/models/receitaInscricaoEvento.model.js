/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('receitaInscricaoEvento', {
		idEvento: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'inscricaoEvento',
				key: 'idEvento'
			},
			field: 'idEvento'
		},
		idPessoa: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'inscricaoEvento',
				key: 'idPessoa'
			},
			field: 'idPessoa'
		},
		dataPagamento: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'dataPagamento'
		}
	}, {
		tableName: 'receitaInscricaoEvento'
	});
};
