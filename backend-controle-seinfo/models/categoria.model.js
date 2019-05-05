module.exports = (sequelize, Sequelize) => {
    const Categoria = sequelize.define('categoria', {
    idCategoria: {
      type: Sequelize.INTEGER,
       primaryKey: true,
      autoIncrement: true, // tem que definir PK e Auto Increment
      },
    nome: {
        type: Sequelize.STRING
      },
    },
  
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'categoria',
      timestamps: false,
      createdAt: false,
    });
    
    Categoria.associate = models => {
        
    models.categoria.model.hasMany(models.atividade.model, {
        foreignKey: 'idCategoria',
        sourceKey: 'idCategoria',
      });
      };


    return Categoria;
  }
