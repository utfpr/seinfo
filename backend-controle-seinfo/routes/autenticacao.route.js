const login = require('../controllers/autenticacao.controller');

module.exports = function (app) {
  async function autenticar_API() {
    console.log('Executando API');
    await login.autenticar();
  }
  setTimeout(autenticar_API, 1);
  setInterval(autenticar_API, 1000 * 60 * 60 * 23);
  // app.post('/api/autentication/', login.autenticar);
  // app.post('/api/login/', login.login);
  // app.post('/api/loginLDAP/', login.loginLDAP);
};
