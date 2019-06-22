module.exports = (sequelize, Sequelize) => {
  const Atividade = sequelize.define('atividade', {
    idAtividade: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'idAtividade'
    },
    titulo: {
      type: Sequelize.STRING(255),
      allowNull: false,
      field: 'titulo'
    },
    valor: {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue: '0',
      field: 'valor'
    },
    descricao: {
      type: Sequelize.STRING(5000),
      allowNull: true,
      field: 'descricao'
    },
    horasParticipacao: {
      type: Sequelize.TIME,
      allowNull: false,
      defaultValue: '00:00:00',
      field: 'horasParticipacao'
    },
    quantidadeVagas: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      field: 'quantidadeVagas'
    },
    idCategoria: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      references: {
        model: 'categoria',
        key: 'idCategoria'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
      field: 'idCategoria'
    },
    idEvento: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      references: {
        model: 'evento',
        key: 'idEvento'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
      field: 'idEvento'
    }
  },

{ //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
    tableName: 'atividade',
    timestamps: false,
    createdAt: false,
  });
  
  Atividade.associate = models=> {
      models.atividade.belongsTo(models.evento,{
        as: 'atividadesDoEvento',
        foreignKey: 'idEvento',
        //onUpdate: 'cascade',
        //onDelete: 'cascade',
      }),
      models.atividade.belongsTo(models.categoria,{
        as: 'categoriaAtv',
        foreignKey: 'idCategoria',
        //onUpdate: 'cascade',
		    //onDelete: 'cascade',
      }),
      models.atividade.hasMany(models.inscricaoAtividade,{
        as:'inscricoesAtv',
        foreignKey: 'idAtividade',
        //onUpdate: 'cascade',
		    //onDelete: 'cascade',
      })
    }


  return Atividade;
}
