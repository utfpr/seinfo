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
        type: Sequelize.STRING(256),
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
      }
    },
    { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'evento',
      timestamps: false,
      createdAt: false,
    });
    
    Evento.associate = models=>{
      models.evento.model.hasMany(models.atividade.model,{
        foreignKey: 'idEvento'
      })

      models.evento.model.hasMany(models.agendamentoEvento.model,{
        foreignKey: 'idEvento'
      })

      models.evento.model.hasMany(models.inscricaoEvento.model,{
        foreignKey: 'idEvento'
      })

      models.evento.model.hasMany(models.lote.model,{
        foreignKey: 'idEvento'
      })

      models.evento.model.hasMany(models.organizacao.model,{
        foreignKey: 'idEvento'
      })

      models.evento.model.hasMany(models.eventoImagem.model,{
        foreignKey: 'idEvento'
      })

      models.evento.model.hasMany(models.receita.model,{
        foreignKey: 'idEvento'
      })
      models.evento.model.hasMany(models.despesa.model,{
        foreignKey: 'idEvento'
      })
    }

    return Evento;
  }

  