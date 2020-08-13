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
		models.inscricaoAtividade.belongsTo(models.atividade,{
			as:'atividade',
			foreignKey: 'idAtividade',
			onUpdate: 'cascade',
		    onDelete: 'cascade',
		}),
		models.inscricaoAtividade.belongsTo(models.inscricaoEvento,{
			as:'eventoInsc',
			foreignKey: 'idEvento',
			onUpdate: 'cascade',
		    onDelete: 'cascade',
		}),
		models.inscricaoAtividade.belongsTo(models.inscricaoEvento,{
			as:'pessoaInsc',
			foreignKey: 'CPF',
			onUpdate: 'cascade',
		    onDelete: 'cascade',
		}),
		models.inscricaoAtividade.hasOne(models.receitaInscricaoAtividade,{
			as:'pessoaAtvRec',
			foreignKey: 'CPF',
		}),
		models.inscricaoAtividade.hasOne(models.receitaInscricaoAtividade,{
			as:'eventoAtvRec',
			foreignKey: 'idEvento',
		}),
		models.inscricaoAtividade.hasOne(models.receitaInscricaoAtividade,{
			as:'ativdadeAtvRec',
			foreignKey: 'idAtividade',
		})
	}

	return InscricaoA;

};
