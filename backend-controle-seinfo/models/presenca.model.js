module.exports = (sequelize, Sequelize) => {
  const Presenca = sequelize.define('presenca', {
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
    idAgenda: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'agenda',
        key: 'idAgenda'
      },
      field: 'idAgenda'
    },
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
      type: Sequelize.CHAR(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pessoa',
        key: 'CPF'
      },
      field: 'CPF'
    }
  },
    { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'presenca',
      timestamps: false,
      createdAt: false,
    });
  return Presenca;
}