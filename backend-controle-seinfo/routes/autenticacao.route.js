module.exports = function(app) {
 
    const lotes = require('../controllers/autenticacao.controller.js');
  
    app.post('/api/autentication', lotes.create);

    app.get('/api/autentication/:loteId', lotes.findById);
  

  
   
  }
  