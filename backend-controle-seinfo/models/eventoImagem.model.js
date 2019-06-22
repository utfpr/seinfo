module.exports = (sequelize, Sequelize) => {
  const eveImage = sequelize.define('eventoImagem', {
    idEvento: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'evento',
        key: 'idEvento'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
      field: 'idEvento'
    },
    idImagem: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'imagem',
        key: 'idImagem'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
      field: 'idImagem'
    }

},
{ //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
    tableName: 'eventoImagem',
    timestamps: false,
    createdAt: false,
  });
  
  eveImage.associate = models => {       
      models.imagem.belongsToMany(models.evento, {
        as: 'eventoImg', 
        through: models.eventoImagem, 
        foreignKey: 'idEvento',
        //onUpdate: 'cascade',
        //onDelete: 'cascade',
      }),
      models.evento.belongsToMany(models.imagem, {
        as: 'imagemEv',
        through: models.eventoImagem,
        foreignKey: 'idImagem',
        //onUpdate: 'cascade',
        //onDelete: 'cascade',
      })
  };


  return eveImage;
}
