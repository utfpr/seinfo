module.exports = (sequelize, Sequelize) => {
    const Carrossel = sequelize.define('carrossel', {
    idCarrossel: {
      type: Sequelize.INTEGER,
       primaryKey: true,
      },
    status: {
        type: Sequelize.BOOLEAN,
    },

  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'carrossel',
      timestamps: false,
      createdAt: false,
    });
    
    Carrossel.associate = models => {
        
          models.carrossel.model.hasMany(models.carrosselImagem.model, {
            foreignKey: 'idCarrossel',
            sourceKey: 'idCarrossel',
          });


    };


    return Carrossel;
  }