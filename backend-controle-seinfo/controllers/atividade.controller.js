const db = require('../models');

const Atividade = db.atividade;
const Categoria = db.categoria;
const Agenda = db.agenda;
const AgendamentoAtividade = db.agendamentoAtividade;
const Protagonista = db.protagonista;
const Pessoa = db.pessoa;

const atob = (b64Encoded) => Buffer.from(b64Encoded, 'base64').toString();

exports.create = async (req, res) => {
  try {
    const {
      titulo,
      valor,
      descricao,
      horasParticipacao,
      quantidadeVagas,
      idEvento,
      idCategoria,
      subatividade,
      dataInicio,
      horaInicio,
    } = req.body;

    const dataAtividade = new Date(`${dataInicio}T${horaInicio}:00.003Z`);

    const atividade = await Atividade.create({
      titulo,
      valor,
      descricao,
      horasParticipacao,
      quantidadeVagas,
      idEvento,
      idCategoria,
      dataInicio: dataAtividade,
    });

    // Cria a SubAtividade
    await Promise.all(
      subatividade.map((item) =>
        atividade.createAtvAgenda({
          local: item.local_subatividade,
          dataHoraInicio: `${item.data_inicio_subatividade}T${item.hora_inicio_subatividade}:00.003Z`,
          dataHoraFim: `${item.data_fim_subatividade}T${item.hora_fim_subatividade}:00.003Z`,
        })
      )
    );

    await Protagonista.create({
      atuacao: 0,
      CPF: 'admin',
      idAtividade: atividade.idAtividade,
    });

    res.status(200).json(atividade);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

exports.findById = async (req, res) => {
  try {
    const { idAtividade, idEvento } = req.params;

    const atividade = await Atividade.findOne({
      where: {
        idAtividade,
        idEvento,
      },
      include: [
        {
          model: Categoria,
          as: 'categoriaAtv',
        },
        {
          model: Agenda,
          as: 'atvAgenda',
          through: { attributes: [] },
        },
        {
          model: Protagonista,
          as: 'protagonistaAtividade',
        },
      ],
    });

    return res.status(200).json(atividade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.findAll = async (req, res) => {
  try {
    const atividades = await Atividade.findAll({
      include: [
        {
          model: Categoria,
          as: 'categoriaAtv',
        },
        {
          model: Agenda,
          as: 'atvAgenda',
          through: { attributes: [] },
        },
        {
          model: Protagonista,
          as: 'protagonistaAtividade',
        },
      ],
    });

    return res.status(200).json(atividades);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.atualiza = async (req, res) => {
  try {
    const {
      titulo,
      valor,
      descricao,
      horasParticipacao,
      quantidadeVagas,
      idCategoria,
      idEvento,
      protagonistaAtividade,
    } = req.body;

    const { idAtividade } = req.params;

    console.log(protagonistaAtividade.CPF);
    const teste = await Protagonista.update(
      {
        CPF: protagonistaAtividade.CPF,
      },
      {
        where: { idAtividade },
      }
    );

    console.log(teste);

    const atividade = await Atividade.update(
      {
        titulo,
        valor,
        descricao,
        horasParticipacao,
        quantidadeVagas,
        idCategoria,
        idEvento,
      },
      {
        where: {
          idAtividade,
        },
      }
    );

    return res.status(200).json(atividade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.delete = async (req, res) => {
  try {
    const { idAtividade, idEvento } = req.params;

    const atividade = await Atividade.findOne({
      where: {
        idAtividade,
        idEvento,
      },
    });

    if (!atividade)
      return res.status(404).json({ error: 'Atividade não encontrada' });

    const agenda = await AgendamentoAtividade.findOne({
      where: { idAtividade },
    });

    const protagonista = await Protagonista.findOne({
      where: { idAtividade },
    });

    await agenda.destroy();
    await protagonista.destroy();
    await atividade.destroy();

    return res.status(200).json(atividade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.AtividadeEvento = async (req, res) => {
  try {
    const { idEvento } = req.params;

    const atividades = await Atividade.findAll({
      where: { idEvento },
      include: [
        {
          model: Categoria,
          as: 'categoriaAtv',
        },
        {
          model: Agenda,
          as: 'atvAgenda',
          through: { attributes: [] },
        },
      ],
    });

    return res.status(200).json(atividades);
  } catch (error) {
    return res.status(500).json(error);
  }
};

//-------------------------------------------------------------------------------------------

exports.criarProtagonista = async (req, res) => {
  try {
    const { idAtividade, cpf } = req.params;
    const { atuacao } = req.body;

    const atividade = await Atividade.findOne({
      where: { idAtividade },
    });

    if (!atividade)
      return res.status(404).json({ error: 'Atividade não encontrada!' });

    const pessoa = await Pessoa.findOne({
      where: { CPF: atob(cpf) },
    });

    const protagonista = await Protagonista.create({
      atuacao,
      idAtividade: atividade.idAtividade,
      CPF: pessoa.CPF,
    });

    return res.status(200).json(protagonista);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.selectProtagonista = async (req, res) => {
  try {
    const protagonistas = await Protagonista.findAll({
      include: [
        { model: Pessoa, as: 'aPes' },
        {
          model: Atividade,
          as: 'aAtv',
          include: [
            {
              model: Categoria,
              as: 'categoriaAtv',
            },
          ],
        },
      ],
    });

    return res.status(200).json(protagonistas);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.selectUmProtagonista = async (req, res) => {
  try {
    const { idAtividade, CPF } = req.params;

    const protagonista = await Protagonista.findOne({
      where: {
        idAtividade,
        CPF: atob(CPF),
      },
      include: [
        {
          model: Pessoa,
          as: 'aPes',
        },
        {
          model: Atividade,
          as: 'aAtv',
          include: [{ model: db.categoria, as: 'categoriaAtv' }],
        },
      ],
    });

    return res.status(200).json(protagonista);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.ProtagonistasDaAtv = async (req, res) => {
  try {
    const { idAtividade } = req.params;

    const protagonista = await Protagonista.findAll({
      where: {
        idAtividade,
      },
      include: [
        {
          model: Pessoa,
          as: 'aPes',
        },
        {
          model: Atividade,
          as: 'aAtv',
          include: [
            {
              model: Categoria,
              as: 'categoriaAtv',
            },
          ],
        },
      ],
    });

    return res.status(200).json(protagonista);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.AtividadesDoProtagonista = async (req, res) => {
  try {
    const { CPF } = req.params;

    const protagonista = await Protagonista.findAll({
      where: { CPF: atob(CPF) },
      include: [
        {
          model: Pessoa,
          as: 'aPes',
        },
        {
          model: Atividade,
          as: 'aAtv',
          include: [
            {
              model: Categoria,
              as: 'categoriaAtv',
            },
          ],
        },
      ],
    });

    return res.status(200).json(protagonista);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deletaProtagonista = async (req, res) => {
  try {
    const { idAtividade, CPF } = req.params;

    const protagonista = await Protagonista.destroy({
      where: {
        idAtividade,
        CPF: atob(CPF),
      },
    });

    return res.status(200).json(protagonista);
  } catch (error) {
    return res.status(500).json(error);
  }
};
