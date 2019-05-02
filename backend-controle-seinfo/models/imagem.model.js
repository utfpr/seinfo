module.exports = (sequelize, Sequelize) => {
    const Imagem = sequelize.define('imagem', {
    idImagem: {
      type: Sequelize.INTEGER,
       primaryKey: true,
      autoIncrement: true, // tem que definir PK e Auto Increment
      },
    url: {
        type: Sequelize.STRING
      }
  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'imagem',
      timestamps: false,
      createdAt: false,
    });
    
    Imagem.associate = models=>{
        models.imagem.model.hasMany(
            models.eventoImagem.model,{
                foreignKey: 'idImagem'
            },
            models.carrosselImagem.model,{
                foreignKey: 'idImagem'
            }
        )
      }


    return Imagem;
  }
