module.exports = (sequelize, Sequelize) => {
  const Imagem = sequelize.define('imagem', {
    idImagem: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'idImagem'
    },
    url: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
      field: 'url'
    }
},
{ //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
    tableName: 'imagem',
    timestamps: false,
    createdAt: false,
  });
  

  return Imagem;
}
