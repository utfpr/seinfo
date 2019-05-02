module.exports = (sequelize, Sequelize) => {
    const Organizacao = sequelize.define('organizacao', {
    idPessoa: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'idPessoa',
        key: 'idPessoa',
      },
      },
    horasOrganizacao: {
        type: Sequelize.STRING
      },
    idEvento: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'idEvento',
        key: 'idEvento',
      },
    },
  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'organizacao',
      timestamps: false,
      createdAt: false,
    });
    
    Organizacao.associate = models => {
        
    models.organizacao.model.belongsTo(models.evento.model, {
        foreignKey: 'idEvento',
        sourceKey: 'idEvento',
      });
      models.organizacao.model.belongsTo(models.pessoa.model, {
          foreignKey: 'idPessoa',
          sourceKey: 'idPessoa',
        });
    };
      

    return Organizacao;
  }