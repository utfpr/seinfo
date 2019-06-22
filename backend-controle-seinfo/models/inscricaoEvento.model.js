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
			onUpdate: 'cascade',
		    onDelete: 'cascade',
			field: 'idEvento'
		},
		idPessoa: {
			type: Sequelize.STRING(64),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'pessoa',
				key: 'idPessoa'
			},
			onUpdate: 'no action',
			onDelete: 'no action',
			field: 'idPessoa'
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
		models.inscricaoEvento.belongsTo(models.pessoa,{
			as:'pessoaInsc',
			foreignKey: 'idPessoa',
			//onUpdate: 'no action',
			//onDelete: 'no action',
		}),
		models.inscricaoEvento.belongsTo(models.evento,{
			as:'eventoInsc',
			foreignKey: 'idEvento',
			//onUpdate: 'cascade',
		    //onDelete: 'cascade',
		}),
		models.inscricaoEvento.hasOne(models.receitaInscricaoEvento,{
			as:'receitaInscEv',
			foreignKey: 'idEvento',
			//onUpdate: 'cascade',
			//onDelete: 'cascade',
		}),
		models.inscricaoEvento.hasOne(models.receitaInscricaoEvento,{
			as:'receitaInscPe',
			foreignKey: 'idPessoa',
			//onUpdate: 'cascade',
			//onDelete: 'cascade',
		}),
		models.inscricaoEvento.hasOne(models.inscricaoAtividade,{
			as:'inscAtvPe',
			foreignKey: 'idPessoa',
			//onUpdate: 'no action',
			//onDelete: 'no action',
		}),
		models.inscricaoEvento.hasOne(models.inscricaoAtividade,{
			as:'inscAtvEv',
			foreignKey: 'idEvento',
			//onUpdate: 'no action',
			//onDelete: 'no action',
		})
	} 

	return InscricaoE;
};
