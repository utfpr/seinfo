/*Referencia para os Tipos e Dados:
 https://sequelize.readthedocs.io/en/v3/docs/models-definition/ */

 module.exports = (sequelize, Sequelize) => {
  const Evento = sequelize.define('evento', {
    idEvento: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'idEvento'
    },
    nome: {
      type: Sequelize.STRING(255),
      allowNull: false,
      field: 'nome'
    },
    descricao: {
      type: Sequelize.STRING(5000),
      allowNull: true,
      field: 'descricao'
    },
    status: {
      type: Sequelize.INTEGER(4),
      allowNull: false,
      defaultValue: '0',
      field: 'status'
    },
    idAgenda: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      references: {
        model: 'agenda',
        key: 'idAgenda'
      },
      field: 'idAgenda'
    }
  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
    tableName: 'evento',
    timestamps: false,
    createdAt: false,
  });
  
  Evento.associate = models=>{
    models.evento.hasMany(models.atividade,{
      as: 'atividades',
      foreignKey: 'idEvento'
    });

    models.evento.belongsTo(models.agenda,{
      as: 'agendamento',
      foreignKey: 'idEvento'
    });

    models.evento.hasMany(models.inscricaoEvento,{
      as: 'inscricoes',
      foreignKey: 'idEvento'
    });

    models.evento.hasMany(models.lote,{
      as: 'lotes',
      foreignKey: 'idEvento'
    });
  
    models.evento.hasMany(models.receita,{
      as: 'receita',
      foreignKey: 'idEvento'
    });
    models.evento.hasMany(models.despesa,{
      as: 'despesa',
      foreignKey: 'idEvento'
    })
  }

  return Evento;
}

