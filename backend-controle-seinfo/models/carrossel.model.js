module.exports = (sequelize, Sequelize) => {
  const Carrossel = sequelize.define('carrossel', {
    idCarrossel: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'idCarrossel'
    },
    status: {
      type: Sequelize.INTEGER(4),
      allowNull: false,
      defaultValue: '0',
      field: 'status'
    }

},
{ //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
    tableName: 'carrossel',
    timestamps: false,
    createdAt: false,
  });
  

  return Carrossel;
}