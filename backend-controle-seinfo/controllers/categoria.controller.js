const db = require('../models/index.js');
const Categorias = db.categoria;

// Post do Evento
exports.create = (req, res) => {
    Categorias.create({  
      nome: req.body.nome
  }).then(categoria => {    
    // Cria um Evento
    console.log("Criado uma categoria!")
    res.send(categoria);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};


exports.findById = (req, res) => {  
  Categorias.findOne({where:{idCategoria:req.params.categoriaId}}).then(categoria => {
    console.log("Achou uma categoria pelo ID "+req.params.categoriaId);
    res.send(categoria); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.findAll = (req, res) => {  
  Categorias.findAll({ raw: true}).then(categoria => {
    console.log("Listou Todas as Categorias!");
    res.send(categoria); //Retorna um Json para a Pagina da API
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

exports.atualiza = (req,res)=>{
  Categorias.update({
      nome: req.body.nome
  },
    {where: {idCategoria: req.params.categoriaId}}).then(categoria=>{
      console.log("Atualizando uma Categoria");
      res.send(categoria);
    }).catch(err=>{
      res.status(500).send("Error "+err);
    })    
},
  

exports.delete = (req, res) => {  
  Categorias.findOne({where:{idCategoria: req.params.categoriaId}}).then(cat=>{
    db.atividade.destroy({where:{idCategoria:cat.idCategoria}})
    cat.destroy()
    res.send('tchau')
    //db.atividade.destroy({where:{idCategoria:cat.idCategoria}})
  })
};


