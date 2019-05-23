/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	const InscricaoA = sequelize.define('inscricaoAtividade', {
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
		idAtividade: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'atividade',
				key: 'idAtividade'
			},
			field: 'idAtividade'
		},
		dataInscricao: {
			type: Sequelize.DATEONLY,
			allowNull: false,
			field: 'dataInscricao'
		}
	}, {
		tableName: 'inscricaoAtividade',
		timestamps: false,
      	createdAt: false,
	});

	InscricaoA.associate = models =>{
		models.inscricaoAtividade.model.belongsTo(models.atividade.model,{
			foreignKey: 'idAtividade'
		})
		models.inscricaoAtividade.model.belongsTo(models.inscricaoEvento.model,{
			foreignKey: 'idEvento'
		})
		models.inscricaoAtividade.model.belongsTo(models.inscricaoEvento.model,{
			foreignKey: 'idPessoa'
		})
	}

	return InscricaoA;

};
