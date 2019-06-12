const db = require('../models/index.js');
const EveImagens = require('../controllers/eventoImagem.controller.js');
const Imagem = db.imagem;
const Carrosel = require('../controllers/carrossel.controller.js');
var _url;
 
// Post do Imagem
exports.create = (req, res, imagem_url) => {
  console.log("\n\n\n Dentro de Imagem ");
  _url = req.url;
  if(imagem_url) _url = imagem_url;

  if(req.evento){
    console.log("\n ID EVENTO dentro IMAGEM "+req.evento);
  }
  Imagem.create({  
    url: _url,
  }).then( imagem => {

    // Cria um Evento
    console.log("Criado Imagem com o id: "+imagem.idImagem);

    if(req.evento){
      console.log("Foi no 1º!");
      EveImagens.create({"evento":req.evento,"imagem":imagem.idImagem});
    }else{
        //asdasd

      console.log("Foi no 2º!");
      Carrosel.create({"status":req.body.status,"imagem":imagem.idImagem});
    }
   

    res.send(imagem);

  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })



};
 

exports.findById = (req, res) => {  
    Imagem.findByPk(req.params.imagemId).then(imagem => {
      console.log("Achou a Imagem pelo ID "+req.params.imagemId);
      res.send(imagem); //Retorna um Json para a Pagina da API
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };

  exports.findAll = (req, res) => {  
    Imagem.findAll({ raw: true}).then(imagem => {
      console.log("Listou Todos as Imagens!");
      res.send(imagem); //Retorna um Json para a Pagina da API
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };

  exports.atualiza = (req,res)=>{
    Imagem.update(
      {
        url: req.url,

    
      },
      {where: {idImagem: req.params.imagemId}}).then(imagem=>{
        console.log("Atualizando Imagem");
        res.send(imagem);
      }).catch(err=>{
        res.status(500).send("Error "+err);
      })
      
    },
  

  exports.delete = (req, res) => {  
    Imagem.destroy({ where: { idEvento: req.params.eventoId } }).then(imagem => {
      console.log("Deletando a Imagem com o ID: "+req.params.eventoId);
      res.send(imagem); //Retorna um Json para a Pagina da API
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };

  // exports.amoeba = (req, res) => {
  //   console.log("Função de Teste");
  // };
