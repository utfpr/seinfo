const env = {
    database: 'seinfo',
    username: 'root',
    password: 'bancodolo',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
  module.exports = env;