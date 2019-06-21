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
      onUpdate: 'no action',
      onDelete: 'no action',
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
      onUpdate: 'no action',
      onDelete: 'no action',
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
  })
  };
    

  return Protagonista;
}