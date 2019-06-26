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
			onUpdate: 'cascade',
      		onDelete: 'cascade',
			field: 'idEvento'
		},
		idPessoa: {
			type: Sequelize.STRING(64),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'inscricaoEvento',
				key: 'idPessoa'
			},
			onUpdate: 'cascade',
      		onDelete: 'cascade',
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
			onUpdate: 'cascade',
      		onDelete: 'cascade',
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
		models.inscricaoAtividade.belongsTo(models.atividade,{
			as:'atividade',
			foreignKey: 'idAtividade',
			//onUpdate: 'cascade',
		    //onDelete: 'cascade',
		}),
		models.inscricaoAtividade.belongsTo(models.inscricaoEvento,{
			as:'eventoInsc',
			foreignKey: 'idEvento',
			//onUpdate: 'cascade',
		    //onDelete: 'cascade',
		}),
		models.inscricaoAtividade.belongsTo(models.inscricaoEvento,{
			as:'pessoaInsc',
			foreignKey: 'idPessoa',
			//onUpdate: 'cascade',
		    //onDelete: 'cascade',
		}),
		models.inscricaoAtividade.hasOne(models.receitaInscricaoAtividade,{
			as:'pessoaAtvRec',
			foreignKey: 'idPessoa',
			//onUpdate: 'cascade',
			//onDelete: 'cascade',
		}),
		models.inscricaoAtividade.hasOne(models.receitaInscricaoAtividade,{
			as:'eventoAtvRec',
			foreignKey: 'idEvento',
			//onUpdate: 'cascade',
			//onDelete: 'cascade',
		}),
		models.inscricaoAtividade.hasOne(models.receitaInscricaoAtividade,{
			as:'ativdadeAtvRec',
			foreignKey: 'idAtividade',
			//onUpdate: 'cascade',
			//onDelete: 'cascade',
		})
	}

	return InscricaoA;

};
