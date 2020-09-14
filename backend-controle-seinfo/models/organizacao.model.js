module.exports = (sequelize, Sequelize) => {
  const Organizacao = sequelize.define('organizacao', {
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
    CPF: {
      type: Sequelize.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pessoa',
        key: 'CPF'
      },
      field: 'CPF'
    },
    horasParticipacao: {
      type: Sequelize.TIME,
      allowNull: false,
      defaultValue: '00:00:00',
      field: 'horasParticipacao'
    }
},
{ //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
    tableName: 'organizacao',
    timestamps: false,
    createdAt: false,
  });
  
  Organizacao.associate = models => {
      
  models.pessoa.belongsToMany(models.evento,{
    as: 'pEvento',
    through: models.organizacao,
    foreignKey: 'CPF',
  }),
  models.evento.belongsToMany(models.pessoa,{
    as: 'ePessoa',
    through: models.organizacao,
    foreignKey: 'idEvento',
  }),
  models.organizacao.belongsTo(models.evento,{
    as: 'oEv',
    foreignKey: 'idEvento'
  }),
  models.organizacao.belongsTo(models.pessoa,{
    as: 'oPes',
    foreignKey: 'CPF'
  })
  };
    

  return Organizacao;
}