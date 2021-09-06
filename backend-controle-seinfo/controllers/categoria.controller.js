const db = require('../models');

const Categorias = db.categoria;

// Post do Evento
exports.create = async (req, res) => {
  try{
    const categoria = await Categorias.create({
      nome: req.body.nome,
    });
    return res.status(200).json(categoria);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.findById = async (req, res) => {
  try{
    const categoria = await Categorias.findOne({ where: { idCategoria: req.params.categoriaId } });
    return res.status(200).json(categoria);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.findAll = async (req, res) => {
  try{
    const categoria = await Categorias.findAll();
    return res.status(200).json(categoria);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.atualiza = async (req, res) => {
  try{
    const categoria = await Categorias.update(
      {
        nome: req.body.nome,
      },
      { where: { idCategoria: req.params.categoriaId } }
    );
    return res.status(200).json(categoria);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.delete = async (req, res) => {
  try{
    const categoria = await Categorias.destroy({ where: { idCategoria: req.params.categoriaId } });
    return res.status(200).json(categoria);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.AtividadesCategoria = async (req, res) => {
  try{
    const atividade = await db.atividade.findAll({
      where: { idCategoria: req.params.idCategoria },
      include: [{ model: db.categoria, as: 'categoriaAtv' }],
    });
    return res.status(200).json(atividade);
  } catch (error) {
    return res.status(500).json(error);
  }
};