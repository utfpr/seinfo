module.exports = (sequelize, Sequelize) => {
    const CarrosselImagem = sequelize.define('carrosselImagem', {
      idCarrossel: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'carrossel',
          key: 'idCarrossel'
        },
        field: 'idCarrossel'
      },
      idImagem: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'imagem',
          key: 'idImagem'
        },
        field: 'idImagem'
      }

  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'carrosselImagem',
      timestamps: false,
      createdAt: false,
    });
    
    CarrosselImagem.associate = models => {
        
        models.carrosselImagem.model.belongsTo(models.imagem.model, {
            foreignKey: 'idImagem',
            sourceKey: 'idImagem',
          });

          models.carrosselImagem.model.belongsTo(models.carrossel.model, {
            foreignKey: 'idCarrossel',
            sourceKey: 'idCarrossel',
          });


    };


    return CarrosselImagem;
  }