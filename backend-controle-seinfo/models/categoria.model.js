module.exports = (sequelize, Sequelize) => {
  const Categoria = sequelize.define('categoria', {
    idCategoria: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'idCategoria'
    },
    nome: {
      type: Sequelize.STRING(255),
      allowNull: false,
      field: 'nome'
    }
  },

{ //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
    tableName: 'categoria',
    timestamps: false,
    createdAt: false,
  });
  
  Categoria.associate = models => {       
    models.categoria.hasMany(models.atividade, {
      as:'atividadesCatg',  
      foreignKey: 'idCategoria',
      //onUpdate: 'cascade',
      //onDelete: 'cascade',
    });
  };


  return Categoria;
}
