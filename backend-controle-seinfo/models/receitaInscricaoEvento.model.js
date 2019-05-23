/* jshint indent: 1 */

<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('receitaInscricaoEvento', {
		idEvento: {
			type: DataTypes.INTEGER(11),
=======
module.exports = function(sequelize, Sequelize) {
	const ReceitaEv =  sequelize.define('receitaInscricaoEvento', {
		idEvento: {
			type: Sequelize.INTEGER(11),
>>>>>>> master
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'inscricaoEvento',
				key: 'idEvento'
			},
			field: 'idEvento'
		},
		idPessoa: {
<<<<<<< HEAD
			type: DataTypes.INTEGER(11),
=======
			type: Sequelize.INTEGER(11),
>>>>>>> master
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'inscricaoEvento',
				key: 'idPessoa'
			},
			field: 'idPessoa'
		},
		dataPagamento: {
<<<<<<< HEAD
			type: DataTypes.DATEONLY,
=======
			type: Sequelize.DATEONLY,
>>>>>>> master
			allowNull: false,
			field: 'dataPagamento'
		}
	}, {
<<<<<<< HEAD
		tableName: 'receitaInscricaoEvento'
	});
=======
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
>>>>>>> master
};
