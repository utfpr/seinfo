module.exports = function(app) {
 
    const login = require('../controllers/autenticacao.controller.js');


    setInterval(nada2,10000); // EXECUTA A API EM INTERVALO DE TEMPO (EM MILISEGUNDOS)

    function nada2(){
        // console.log("Executando API")
        login.autenticar();
    }

    // app.post('/api/autentication/',login.autentica);
    
    app.post('/api/login/',login.login);
  
}


// setInterval(() => {
//     require('.routes/autenticacao.route.js')
// }, 1000 * 60 * 60 * 23);

