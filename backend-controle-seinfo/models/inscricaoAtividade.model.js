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
			type: Sequelize.STRING(64),
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
		models.inscricaoAtividade.belongsTo(models.atividade,{
			as:'atividade',
			foreignKey: 'idAtividade'
		}),
		models.inscricaoAtividade.belongsTo(models.inscricaoEvento,{
			as:'eventoInsc',
			foreignKey: 'idEvento'
		}),
		models.inscricaoAtividade.belongsTo(models.inscricaoEvento,{
			as:'pessoaInsc',
			foreignKey: 'idPessoa'
		}),
		models.inscricaoAtividade.hasOne(models.receitaInscricaoAtividade,{
			as:'pessoaAtvRec',
			foreignKey: 'idPessoa'
		}),
		models.inscricaoAtividade.hasOne(models.receitaInscricaoAtividade,{
			as:'eventoAtvRec',
			foreignKey: 'idEvento'
		}),
		models.inscricaoAtividade.hasOne(models.receitaInscricaoAtividade,{
			as:'ativdadeAtvRec',
			foreignKey: 'idAtividade'
		})
	}

	return InscricaoA;

};