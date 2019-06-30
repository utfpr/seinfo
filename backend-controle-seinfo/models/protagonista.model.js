module.exports = (sequelize, Sequelize) => {
  const Protagonista = sequelize.define('protagonista', {
    atuacao: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      field: 'atuacao'
    },
    idPessoa: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pessoa',
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
    }
},
{ //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
    tableName: 'protagonista',
    timestamps: false,
    createdAt: false,
  });
  
  Protagonista.associate = models => {
      
  models.pessoa.belongsToMany(models.atividade, {
    as:'pessoaProt',
    through:models.protagonista,  
    foreignKey: 'idPessoa',
  }),
  models.atividade.belongsToMany(models.pessoa, {
    as:'atividadeProt',
    through:models.protagonista,  
    foreignKey: 'idAtividade',
  }),
  models.protagonista.belongsTo(models.atividade,{
    as: 'aAtv',
    foreignKey: 'idAtividade'
  }),
  models.protagonista.belongsTo(models.pessoa,{
    as: 'aPes',
    foreignKey: 'idPessoa'
  })
  };
    

  return Protagonista;
}