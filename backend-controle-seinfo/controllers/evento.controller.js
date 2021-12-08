const moment = require('moment');
const db = require('../models');

const Evento = db.evento;
const Agenda = db.agenda;
const Inscricao = db.inscricaoEvento;
const Lote = db.lote;
const Pessoa = db.pessoa;
const Organizacao = db.organizacao;

const atob = (b64Encoded) => Buffer.from(b64Encoded, 'base64').toString();

// Post do Evento
exports.create = async (req, res) => {
  try {
    const {
      local_eve,
      nome,
      descricao,
      select_status,
      lote,
      cpfOrganizador,
      dataHoraInicio,
      dataHoraFim,
    } = req.body;

    const agenda = await Agenda.create({
      dataHoraInicio,
      dataHoraFim,
      local: local_eve,
    });

    const evento = await Evento.create({
      nome,
      descricao,
      status: select_status,
      idAgenda: agenda.idAgenda,
    });

    await Promise.all(
      lote.map(async (loteItem) => {
        await Lote.create({
          idEvento: evento.idEvento,
          valor: parseFloat(loteItem.valor_lote),
          dataAbertura: loteItem.data_inicio_lote,
          dataFechamento: loteItem.data_fim_lote,
        });
      })
    );

    const pessoa = await Pessoa.findOne({
      where: { CPF: cpfOrganizador },
    });

    await Organizacao.create({
      idEvento: evento.idEvento,
      CPF: pessoa.CPF,
    });

    return res.status(200).json(evento);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.findById = async (req, res) => {
  try {
    const evento = await Evento.findOne({
      where: { idEvento: req.params.idEvento },
      attributes: ['idEvento', 'nome', 'descricao', 'status'],
      include: [
        {
          model: Agenda,
          as: 'agendamento',
          attributes: ['dataHoraInicio', 'dataHoraFim', 'local'],
        },
      ],
    });

    const atividades = await evento.getAtividades({
      attributes: [
        'idAtividade',
        'titulo',
        'valor',
        'descricao',
        'horasParticipacao',
        'quantidadeVagas',
        'dataInicio',
      ],
      include: [
        {
          model: db.categoria,
          as: 'categoriaAtv',
          attributes: ['nome'],
        },
        {
          model: Agenda,
          as: 'atvAgenda',
          through: { attributes: [] },
        },
      ],
      order: [['dataInicio', 'ASC']],
    });
    const lotes = await evento.getLotes({
      attributes: ['idLote', 'valor', 'dataAbertura', 'dataFechamento'],
    });
    const lotesVencidos = [];
    const lotesDisponiveis = [];
    const dataAtual = new Date();

    lotes.forEach((lote) => {
      const dataLote = new Date(`${lote.dataFechamento}T23:59:59.003Z`);

      if (dataLote < dataAtual) {
        lotesVencidos.push(lote);
      } else {
        lotesDisponiveis.push(lote);
      }
    });

    // eslint-disable-next-line prefer-const
    let atividadesPorCategorias = {};
    atividades.forEach((atividade) => {
      atividadesPorCategorias[atividade.categoriaAtv.nome] = {
        ...atividadesPorCategorias[atividade.categoriaAtv.nome],
        [atividade.titulo]: atividade,
      };
    });

    const eventosFormatados = {
      ...evento.dataValues,
      atividades: atividadesPorCategorias,
      lotesDisponiveis,
      lotesVencidos,
    };

    return res.status(200).json(eventosFormatados);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.findAll = async (req, res) => {
  try {
    const eventos = await Evento.findAll({
      include: [
        { model: Lote, as: 'lotes' },
        { model: Agenda, as: 'agendamento' },
      ],
    });

    const eventosFormatados = await Promise.all(
      eventos.map(async (evento) => {
        const organizacaoEvento = await Organizacao.findOne({
          where: {
            idEvento: evento.idEvento,
          },
        });

        return {
          ...evento.dataValues,
          organizacaoEvento: organizacaoEvento && organizacaoEvento.dataValues,
        };
      })
    );

    res.status(200).json(eventosFormatados); // Retorna um Json para a Pagina da API
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.atualiza = async (req, res) => {
  const { agendamento, lotes, nome, descricao, status, organizacaoEvento } =
    req.body;
  const { idEvento } = req.params;
  try {
    const { idAgenda } = agendamento;
    await Agenda.update(agendamento, { where: { idAgenda } });

    await Promise.all(
      lotes.map((lote) => {
        const { idLote } = lote;
        return Lote.update(lote, { where: { idLote } });
      })
    );

    const evento = await Evento.update(
      {
        nome,
        descricao,
        status,
      },
      { where: { idEvento } }
    );

    await Organizacao.update(
      {
        CPF: organizacaoEvento.CPF,
      },
      { where: { idEvento } }
    );

    res.status(200).json(evento);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.delete = async (req, res) => {
  try {
    const mensagem = await Evento.destroy({
      where: { idEvento: req.params.idEvento },
    });

    return res.status(200).json(mensagem);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getAllEventosCPF = async (req, res) => {
  try {
    const { CPF } = req.body;
    const eventos = await Evento.findAll({
      where: { status: 1 },
      include: [{ model: db.agenda, as: 'agendamento' }],
    });
    if (!eventos)
      return res.status(404).json('Não existe nenhum evento disponivel');

    const novosEventos = [];
    eventos.forEach(async (e) => {
      const lotes = await e.getLotes({
        attributes: ['idLote', 'valor', 'dataAbertura', 'dataFechamento'],
      });
      const lotesVencidos = [];
      const lotesDisponiveis = [];
      const dataAtual = new Date();

      lotes.forEach((lote) => {
        const dataLoteF = new Date(`${lote.dataFechamento}T23:59:59.003Z`);
        const dataLoteA = new Date(`${lote.dataAbertura}T23:59:59.003Z`);
        if (dataLoteF < dataAtual) {
          lotesVencidos.push(lote.dataValues);
        } /*else if (dataLoteA > dataAtual) {
          lotesVencidos.push(lote.dataValues);
        } */ else {
          lotesDisponiveis.push(lote.dataValues);
        }
      });
      const eObj = {
        ...e.dataValues,
        lotesDisponiveis,
        lotesVencidos,
      };

      novosEventos.push(eObj);
    });

    const idEventosInscrito = (
      await Inscricao.findAll({
        attributes: ['idEvento'],
        where: { CPF: atob(CPF) },
      })
    ).map((e) => e.idEvento);
    const finalEvents = [];
    novosEventos.forEach((e) => {
      const finalObj = {
        ...e,
        estaInscrito: idEventosInscrito.includes(e.idEvento),
      };
      finalEvents.push(finalObj);
    });

    return res.status(200).json(finalEvents);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getAllAvailableEvents = async (req, res) => {
  try {
    const eventos = await Evento.findAll({
      where: { status: 1 },
      include: [
        { model: Lote, as: 'lotes' },
        { model: Agenda, as: 'agendamento' },
      ],
    });

    if (!eventos)
      return res.status(404).json('Não existe nenhum evento disponivel');

    return res.status(200).json(eventos);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Receita de um evento
exports.EvReceita = async (req, res) => {
  try {
    const receitaEvento = await db.receita.findAll({
      where: { idEvento: req.params.idEvento },
    });

    return res.status(200).json(receitaEvento);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// receita de inscritos no evento
exports.RecInEv = async (req, res) => {
  try {
    const inscritosEvento = await db.receitaInscricaoEvento.findAll({
      where: { idEvento: req.params.idEvento },
    });

    return res.status(200).json(inscritosEvento);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// despesa de um evento
exports.DespEv = async (req, res) => {
  try {
    const despesasEvento = await db.despesa.findAll({
      where: { idEvento: req.params.idEvento },
    });

    return res.status(200).json(despesasEvento);
  } catch (error) {
    return res.status(500).json(error);
  }
};

//------------------------------------------------------------------------------------------
// foi trocado IDPessoa para CPF

exports.criaOrganizacao = async (req, res) => {
  Evento.findOne({ where: { idEvento: req.params.idEvento } })
    .then((evento) => {
      db.pessoa
        .findOne({ where: { CPF: atob(req.params.CPF) } })
        .then((pessoa) => {
          db.organizacao
            .create({
              horasParticipacao: req.body.horasParticipacao,
              idEvento: evento.idEvento,
              CPF: pessoa.CPF,
            })
            .then((org) => {
              res.send(org);
            })
            .catch((err) => {
              res.status(500).send(`Error -> ${err}`);
            });
        })
        .catch((err) => {
          res.status(500).send(`Error -> ${err}`);
        });
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.criaOrganizacao = async (req, res) => {
  try {
    const evento = await Evento.findOne({
      where: { idEvento: req.params.idEvento },
    });

    if (!evento) {
      return res.status(404).json({ error: 'Evento não encontrado.' });
    }

    const pessoa = await db.pessoa.findOne({
      where: { CPF: atob(req.params.CPF) },
    });
    if (!pessoa) {
      return res.status(404).json({ error: 'Pessoa não encontrada.' });
    }
    const organizacao = await db.organizacao.create({
      horasParticipacao: req.body.horasParticipacao,
      idEvento: evento.idEvento,
      CPF: pessoa.CPF,
    });

    if (!organizacao) {
      return res.status(500).json({ error: 'Organização não foi criada.' });
    }

    return res.status(200).json(evento);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// seleciona todos organizadores em todos eventos
exports.selectOrganizacao = async (req, res) => {
  try {
    const organizacao = await db.organizacao.findAll({
      include: [
        { model: db.pessoa, as: 'oPes' },
        { model: db.evento, as: 'oEv' },
      ],
    });

    return res.send(organizacao);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Seleciona um organizador de um evento
exports.selectUmOrganizador = async (req, res) => {
  try {
    const organizador = await db.organizacao.findOne({
      where: { CPF: atob(req.params.CPF), idEvento: req.params.idEvento },
      include: [
        { model: db.pessoa, as: 'oPes' },
        { model: db.evento, as: 'oEv' },
      ],
    });

    return res.status(200).json(organizador);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// seleciona os organizadores de um evento
exports.selectOrganizacaoEvento = async (req, res) => {
  try {
    const organizadores = await db.organizacao.findAll({
      where: { idEvento: req.params.idEvento },
      include: [
        { model: db.pessoa, as: 'oPes' },
        { model: db.evento, as: 'oEv' },
      ],
    });

    return res.status(200).json(organizadores);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// seleciona os eventos onde a pessoa é organizadora
exports.selectEventoOrganizador = async (req, res) => {
  try {
    const org = await db.organizacao.findAll({
      where: { CPF: atob(req.params.CPF) },
      include: [
        { model: db.pessoa, as: 'oPes' },
        { model: db.evento, as: 'oEv' },
      ],
    });

    return res.status(200).json(org);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOrganizacao = async (req, res) => {
  try {
    const delOrganizacao = await db.organizacao.destroy({
      where: { CPF: atob(req.params.CPF), idEvento: req.params.idEvento },
    });
    return res.status(200).json(delOrganizacao);
  } catch (error) {
    return res.status(500).json(error);
  }
};
