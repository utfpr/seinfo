const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
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
db.minicruso = require('../models/minicurso.model.js')(sequelize,Sequelize);
db.palestra = require('../models/palestra.model.js')(sequelize,Sequelize);
db.alunos = require('../models/aluno.model.js')(sequelize, Sequelize); 
db.pessoas = require('../models/pessoa.model.js')(sequelize,Sequelize);
db.convidados = require('../models/convidado.model.js')(sequelize,Sequelize);
db.lotes = require('../models/lote.model.js')(sequelize,Sequelize);
db.categorias = require('../models/categoria.model.js')(sequelize,Sequelize);
/*
db.eventos.hasMany(db.minicruso,{ foreignKey: 'idEvento'})
db.eventos.hasMany(db.palestra,{ foreignKey: 'idEvento'})
db.minicruso.belongsTo(db.eventos,{ foreignKey: 'idEvento'})
db.palestra.belongsTo(db.eventos,{ foreignKey: 'idEvento'})
*/

module.exports = db;