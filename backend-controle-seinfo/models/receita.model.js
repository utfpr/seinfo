/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	const Receita = sequelize.define('receita', {
		idReceita: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idReceita'
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
		dataReceita: {
			type: Sequelize.DATEONLY,
			allowNull: false,
			field: 'dataReceita'
		},
		idEvento: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			references: {
				model: 'evento',
				key: 'idEvento'
			},
			onUpdate: 'cascade',
      		onDelete: 'cascade',
			field: 'idEvento'
		}
	}, {
		tableName: 'receita',
		timestamps: false,
      	createdAt: false,
	});

	Receita.associate = models =>{
		models.receita.belongsTo(models.evento,{
			as:'receitaEv',
			foreignKey: 'idEvento'
		})
	}

	return Receita;
};
