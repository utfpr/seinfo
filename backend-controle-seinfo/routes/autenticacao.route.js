module.exports = function(app) {
    const login = require('../controllers/autenticacao.controller.js');

    setTimeout(autenticar_API,1);
    setInterval(autenticar_API,1000*60*60*23); // EXECUTA A API EM INTERVALO DE TEMPO (EM MILISEGUNDOS)

    function autenticar_API(){
        // console.log("Executando API")
        login.autenticar();
    }

    // app.post('/api/autentication/',login.autentica);
    app.post('/api/login/',login.login);
    
};


// setInterval(() => {
//     require('.routes/autenticacao.route.js')
// }, 1000 * 60 * 60 * 23);

