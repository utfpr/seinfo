module.exports = function(app) {
     const login = require('../controllers/autenticacao.controller.js');

     
     async function autenticar_API(){
         console.log("Executando API")
         await login.autenticar();
        }
        
     setTimeout(autenticar_API,1);
     setInterval(autenticar_API,1000*60*60*23); // EXECUTA A API EM INTERVALO DE TEMPO (EM MILISEGUNDOS)
     app.post('/api/autentication/',login.autenticar);
     app.post('/api/login/',login.login);
     app.post('/api/loginLDAP/', login.loginLDAP);
    
    // const login = require('../controllers/autenticacao.controller.js');

    
};

//  setInterval(() => {
//      require('.routes/autenticacao.route.js')
//  }, 1000 * 0 * 0 * 0);


