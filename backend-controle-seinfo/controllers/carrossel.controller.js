const db = require('../models');

const Carrossel = db.carrossel;
const Imagem = db.imagem;

exports.store = async (req, res) => {
  try {
    const { select_status } = req.body;
    const { path } = req.file;
    const pathImage = path.slice(path.indexOf('tmp'), path.length);
    const urlImage = `${process.env.URL_API}/${pathImage}`;

    const imagem = await Imagem.create({
      url: urlImage,
    });

    const { idImagem } = imagem;

    const carrossel = await Carrossel.create({
      status: select_status,
      idImagem,
    });

    return res.status(200).json(carrossel);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.delete = async (req, res) => {
  try {
    const { idCarrossel } = req.params;

    const rows = await Carrossel.destroy({
      where: { idCarrossel },
    });

    if (rows < 1)
      return res.status(404).json({ error: 'Nenhum carrossel encontrado!' });

    return res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.update = async (req, res) => {
  try {
    const { status, idImagem, idCarrossel } = req.body;

    const carrossel = Carrossel.update(
      {
        status,
        idImagem,
      },
      {
        where: {
          idCarrossel,
        },
      }
    );

    return res.status(200).json(carrossel);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.show = async (req, res) => {
  try {
    const carrossel = await Carrossel.findAll({
      where: {
        status: true,
      },
      include: [
        {
          model: Imagem,
          as: 'Imagem',
          attributes: ['url'],
        },
      ],
      raw: true,
      attributes: ['idImagem', 'idCarrossel'],
    });

    return res.status(200).json(carrossel);
  } catch (error) {
    return res.status(500).json(error);
  }
};
