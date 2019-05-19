const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.user, env.password, {
  host: env.host,
  port: env.port,
  dialect: env.dialect,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.eventos = require('../models/evento.model.js')(sequelize, Sequelize);
db.pessoas = require('../models/pessoa.model.js')(sequelize,Sequelize);
db.lotes = require('../models/lote.model.js')(sequelize,Sequelize);
db.categorias = require('../models/categoria.model.js')(sequelize,Sequelize);
db.atividades = require('../models/atividade.model.js')(sequelize,Sequelize);
db.agendas = require('../models/agenda.model.js')(sequelize,Sequelize);
db.agEventos = require('../models/agendamentoEvento.model.js')(sequelize,Sequelize);
db.imagens = require('../models/imagem.model.js')(sequelize,Sequelize);
db.eveImagens = require('../models/eventoImagem.model.js')(sequelize,Sequelize);
/*
db.eventos.hasMany(db.minicruso,{ foreignKey: 'idEvento'})
db.eventos.hasMany(db.palestra,{ foreignKey: 'idEvento'})
db.minicruso.belongsTo(db.eventos,{ foreignKey: 'idEvento'})
db.palestra.belongsTo(db.eventos,{ foreignKey: 'idEvento'})
*/

module.exports = db;