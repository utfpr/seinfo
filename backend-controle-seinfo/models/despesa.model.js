/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	const Despesa = sequelize.define('despesa', {
		idDespesa: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idDespesa'
		},
		descricao: {
			type: Sequelize.STRING(500),
			allowNull: false,
			field: 'descricao'
		},
		valor: {
			type: Sequelize.FLOAT,
			allowNull: false,
			defaultValue: '0',
			field: 'valor'
		},
		dataDespesa: {
			type: Sequelize.DATEONLY,
			allowNull: false,
			field: 'dataDespesa'
		},
		idEvento: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			references: {
				model: 'evento',
				key: 'idEvento'
			},
			field: 'idEvento'
		}
	}, {
		tableName: 'despesa',
		timestamps: false,
      	createdAt: false,
	});
	
	Despesa.associate = models =>{
		models.despesa.model.belongsTo(models.evento.model,{
			foreignKey: 'idEvento'
		})
	}

	return Despesa;
};
