/*Referencia para os Tipos e Dados:
 https://sequelize.readthedocs.io/en/v3/docs/models-definition/ */

 module.exports = (sequelize, Sequelize) => {
    const Pessoa = sequelize.define('pessoa', {
      idPessoa: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'idPessoa'
      },
      nome: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: 'nome'
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
        field: 'email'
      },
      cpf: {
        type: Sequelize.CHAR(11),
        allowNull: false,
        unique: true,
        field: 'CPF'
      },
      senha: {
        type: Sequelize.CHAR(32),
        allowNull: false,
        field: 'senha'
      },
      nivel: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: 'nivel'
      },
      classificacao: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        field: 'classificacao'
      }
    },
    { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'pessoa',
      timestamps: false,
      createdAt: false,
    });
    
    Pessoa.associate = models => {
      models.pessoa.model.hasMany(models.protagonista.model, {
        foreignKey: 'idPessoa',
        sourceKey: 'idPessoa',
      });
      models.pessoa.model.hasMany(models.organizacao.model, {
        foreignKey: 'idPessoa',
        sourceKey: 'idPessoa',
      });
      models.pessoa.model.hasMany(models.inscricaoEvento.model, {
        foreignKey: 'idPessoa',
        sourceKey: 'idPessoa',
      });
    };


    return Pessoa;
  }
