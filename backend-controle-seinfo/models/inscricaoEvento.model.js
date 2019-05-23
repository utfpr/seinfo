/* jshint indent: 1 */

module.exports = function(sequelize, Sequelize) {
	const InscricaoE =  sequelize.define('inscricaoEvento', {
		idEvento: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'evento',
				key: 'idEvento'
			},
			field: 'idEvento'
		},
		idPessoa: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'pessoa',
				key: 'idPessoa'
			},
			field: 'idPessoa'
		},
		idLote: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			references: {
				model: 'lote',
				key: 'idLote'
			},
			field: 'idLote'
		},
		dataInscricao: {
			type: Sequelize.DATEONLY,
			allowNull: false,
			field: 'dataInscricao'
		}
	}, {
		tableName: 'inscricaoEvento',
		timestamps: false,
      	createdAt: false,
	});

	InscricaoE.associate = models => {
		models.inscricaoEvento.model.belongsTo(models.pessoa.model,{
			foreignKey: 'idPessoa'
		})
		models.inscricaoEvento.model.belongsTo(models.evento.model,{
			foreignKey: 'idEvento'
		})
		models.inscricaoEvento.model.hasOne(models.lote.model,{
			foreignKey: 'idLote'
		})
	} 

	return InscricaoE;
};
