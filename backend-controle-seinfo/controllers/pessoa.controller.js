const nodemailer = require('nodemailer');
const formatCPF = require('@fnando/cpf');
const db = require('../models');
require('dotenv').config();

const Pessoa = db.pessoa;
const Evento = db.evento;
const Atividade = db.atividade;
const InscricaoAtividade = db.inscricaoAtividade;
const InscricaoEvento = db.inscricaoEvento;
const Lote = db.lote;
const Presenca = db.presenca;

const {
  SENDER_EMAIL,
  LOGIN_EMAIL,
  PASSWORD_EMAIL,
  HOST_EMAIL,
  PORT_HOST_EMAIL,
} = process.env;

const atob = (b64Encoded) => Buffer.from(b64Encoded, 'base64').toString();

exports.create = async (req, res) => {
  const { RA, nome, email, cpf: CPF } = req.body;
  let { senha, nivel, classificacao } = req.body;

  const idPessoa = RA || 'VISITANTE';

  senha = senha || Math.random().toString(36).slice(-8);

  // nivel 0 é um placeholder
  nivel = nivel || 0;

  // classificacao 0 é um placeholder
  classificacao = classificacao || 0;

  // tirar isso e passar pro env
  const remetente = nodemailer.createTransport({
    host: HOST_EMAIL,
    port: PORT_HOST_EMAIL,
    secure: false,
    auth: {
      user: LOGIN_EMAIL,
      pass: PASSWORD_EMAIL,
    },
  });

  try {
    const pessoa = await Pessoa.create({
      idPessoa,
      nome,
      email,
      CPF,
      senha,
      nivel,
      classificacao,
    });

    await remetente.sendMail({
      from: SENDER_EMAIL,
      to: pessoa.email,
      subject: 'Confirmação de cadastro Seinfo',
      text: `Você está recebendo este email para confirmar seu cadastro no evento Seinfo.\n Sua senha é: ${senha}`,
    });

    res.send(
      `Foi cadastrado: ${pessoa.idPessoa}\nEntre no seu email para retirar sua senha e entrar no portal!`
    );
  } catch (err) {
    res.status(500).send(`Error -> ${err}`);
  }
};

exports.findById = async (req, res) => {
  try {
    const { CPF, idPessoa } = req.params;

    const pessoa = await Pessoa.findOne({ where: { CPF: atob(CPF) } });
    if (!pessoa) {
      return res.status(404).send('Pessoa não encontrada'); // Retorna um Json para a Pagina da API
    }
    return res.status(200).send(pessoa); // Retorna um Json para a Pagina da API
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.findAll = async (req, res) => {
  try {
    const pessoa = await Pessoa.findAll();
    res.status(200).send(pessoa); // Retorna um Json para a Pagina da API
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.atualiza = async (req, res) => {
  try {
    const { nome, email, nivel } = req.body;
    const CPF = atob(req.params.CPF);

    await Pessoa.update(
      {
        nome,
        email,
        nivel,
      },
      { where: { CPF } }
    );
    res.status(200).send('Dados atualizados com sucesso!');
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.recuperarSenha = async (req, res) => {
  try {
    const { CPF } = req.params;
    const pessoa = await Pessoa.findOne({
      where: { CPF: formatCPF.strip(atob(CPF)) },
    });
    if (pessoa) {
      const senha = Math.random().toString(36).slice(-8);
      const remetente = nodemailer.createTransport({
        host: HOST_EMAIL,
        port: PORT_HOST_EMAIL,
        secure: false,
        auth: {
          user: LOGIN_EMAIL,
          pass: PASSWORD_EMAIL,
        },
      });
      const emailConfCadastro = {
        from: SENDER_EMAIL,
        to: pessoa.email,
        subject: 'Recuperação de senha',
        text: `Você está recebendo este email para recuperação de senha do seu cadastro na Seinfo.\n Sua senha é: ${senha}`,
      };
      remetente.sendMail(emailConfCadastro, (error) => {
        console.log(error);
      });
      pessoa.update({ senha });
      return res
        .status(200)
        .send(`Email de recuperação enviado para:${pessoa.email}`);
    }
    return res.status(404).send('Usuário não cadastrado');
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.delete = async (req, res) => {
  try {
    const { CPF } = req.params;
    await Pessoa.destroy({ where: { CPF: atob(CPF) } });
    return res.status(200).send(`${CPF} foi deletado`); // Retorna um Json para a Pagina da API
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.PessoaExistente = async (req, res) => {
  try {
    const { CPF } = req.params;
    const pessoa = await Pessoa.findOne({ where: { CPF: atob(CPF) } });
    if (pessoa) {
      return res.status(200).send(true);
    }
    return res.status(200).send(false);
  } catch (error) {
    return res.status(500).send(error);
  }
};

//----------------------------------------------------------------------------------------------------

exports.cadastrarEmEvento = async (req, res) => {
  try {
    const { CPF, idEvento, idLote } = req.params;

    const data = new Date();

    const pessoa = await Pessoa.findOne({ where: { CPF: atob(CPF) } });
    const evento = await Evento.findOne({ where: { idEvento } });
    const lote = await Lote.findOne({ where: { idLote } });
    const inscricao = await InscricaoEvento.create({
      dataInscricao: data,
      idEvento: evento.idEvento,
      CPF: pessoa.CPF,
      idLote: lote.idLote,
    });
    if (!pessoa) {
      return res.status(404).json({ error: 'Pessoa não encontrada' });
    }
    if (!evento) {
      return res.status(404).json({ error: 'Evento não encontrada' });
    }
    return res.status(200).send(inscricao);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.deletaInscricaoEvento = async (req, res) => {
  try {
    const {idEventoReq } = req.params;
    console.log(idEventoReq);
    const inscricao = await InscricaoEvento.destroy({
      where: { idEvento: idEventoReq, CPF: req.userId },
    });
    return res.status(200).json(inscricao);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

exports.selectInscricaoEvento = async (req, res) => {
  try {
    // seleciona todos inscritos em todos eventos
    const pessoaEv = await InscricaoEvento.findAll({
      include: [
        { model: Pessoa, as: 'pessoaInsc' },
        { model: Evento, as: 'eventoInsc' },
      ],
    });
    return res.status(200).send(pessoaEv);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.selectInscrito = async (req, res) => {
  // seleciona um inscrito em um evento
  try {
    const { idEventoReq, CPF } = req.params;
    const pessoaEv = await InscricaoEvento.findOne({
      where: { idEvento: idEventoReq, CPF: atob(CPF) },
      include: [
        { model: Pessoa, as: 'pessoaInsc' },
        { model: Evento, as: 'eventoInsc' },
      ],
    });
    return res.status(200).send(pessoaEv);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.InscricoesNoEvento = async (req, res) => {
  try {
    // seleciona todos inscritos em um evento
    const { idEventoReq } = req.params;
    const pessoaEv = await InscricaoEvento.findAll({
      where: { idEvento: idEventoReq },
      include: [
        { model: Pessoa, as: 'pessoaInsc' },
        { model: Evento, as: 'eventoInsc' },
      ],
    });
    return res.status(200).send(pessoaEv);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.InscricoesPessoa = async (req, res) => {
  try {
    // seleciona todos eventos que a pessoa se inscreveu
    const { CPF } = req.params;

    console.log(CPF, atob(CPF));

    const pessoaEv = await InscricaoEvento.findAll({
      where: { CPF: atob(CPF) },
      include: [
        { model: Pessoa, as: 'pessoaInsc' },
        { model: Evento, as: 'eventoInsc' },
      ],
    });

    console.log(pessoaEv);
    return res.status(200).send(pessoaEv);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

//----------------------------------------------------------------------------------------------------------

exports.cadastrarEmAtividade = async (req, res) => {
  try {
    const inscricao = await InscricaoEvento.findOne({
      where: { idEvento: req.params.idEvento, CPF: req.userId },
    });
    if (!inscricao) {
      return res.status(404).json({ error: 'Inscrição não encontrado.' });
    }

    const data = new Date();

    const inscricaoAtividade = await InscricaoAtividade.create({
      dataInscricao: data,
      idEvento: inscricao.idEvento,
      CPF: inscricao.CPF,
      idAtividade: req.body.idAtividade,
    });
    if (!inscricaoAtividade) {
      return res.status(500).json(inscricaoAtividade);
    }

    return res.status(200).json(inscricao);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.index = async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll({
      attributes: ['idPessoa', 'nome', 'CPF'],
    });
    return res.status(200).send(pessoas);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.deletaInscricaoAtividade = async (req, res) => {
  try {
    const { idEvento, idAtividade, CPF } = req.params;
    const inscricao = await InscricaoAtividade.destroy({
      where: {
        idEvento: idEvento,
        idAtividade: idAtividade,
        CPF: req.userId,
      },
    });
    return res.status(200).json(inscricao);
  } catch (error) {
    console.log("error",error)
    return res.status(500).send(error);
    
  }
  
};

// seleciona todas pessoas inscritas em todas atividades
exports.selectInscricaoAtividade = async (req, res) => {
  try {
    const pessoasInscritas = await InscricaoAtividade.findAll({
      include: [
        { model: Atividade, as: 'atividade' },
        {
          model: InscricaoEvento,
          as: 'eventoInsc',
          include: [
            { model: Evento, as: 'eventoInsc' },
            { model: Pessoa, as: 'pessoaInsc' },
          ],
        },
      ],
    });

    return res.status(200).json(pessoasInscritas);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// seleciona um inscrito em uma atividade
exports.selectInscritoAtv = async (req, res) => {
  try {
    const { idEventoReq, idAtividadeReq, CPF } = req.params;
    const pessoaAtv = await InscricaoAtividade.findOne({
      where: {
        idEvento: idEventoReq,
        idAtividade: idAtividadeReq,
        CPF: atob(CPF),
      },
      include: [
        { model: Atividade, as: 'atividade' },
        {
          model: InscricaoEvento,
          as: 'eventoInsc',
          include: [
            { model: Evento, as: 'eventoInsc' },
            { model: Pessoa, as: 'pessoaInsc' },
          ],
        },
      ],
    });

    return res.status(200).send(pessoaAtv);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// seleciona as pessoas inscritas na ativdade
exports.selectInscricoesNaAtividade = async (req, res) => {
  try {
    const { idAtividade, idEvento } = req.params;

    const pessoasInscritasUmaAtividade = await InscricaoAtividade.findAll({
      where: {
        idAtividade,
        idEvento,
      },
      include: [
        {
          model: InscricaoEvento,
          as: 'eventoInsc',
          include: [
            { model: Evento, as: 'eventoInsc' },
            {
              model: Pessoa,
              attributes: ['nome', 'email', 'CPF', 'nivel', 'classificacao'],
              as: 'pessoaInsc',
            },
          ],
        },
      ],
    });

    const cpfPessoasPresentes = await Presenca.findAll({
      where: {
        idEvento,
        idAtividade,
        presenca: true,
      },
    }).map((pessoa) => pessoa.CPF);

    const dadosRetornados = pessoasInscritasUmaAtividade.map((pessoa) => ({
      presente: !!cpfPessoasPresentes.includes(pessoa.CPF),
      ...pessoa.dataValues,
    }));

    return res.status(200).json(dadosRetornados);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// seleciona as atividades que a pessoa se inscreveu
exports.selectInscricoesPessoa = async (req, res) => {
  try {
    const atividadesUmaPessoa = await InscricaoAtividade.findAll({
      where: { CPF: atob(req.params.CPF) },
      include: [{ model: Atividade, as: 'atividade' }],
    });

    return res.status(200).json(atividadesUmaPessoa);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// seleciona as atividades que a pessoa se inscreveu de um evento em especifico
exports.selectInscriAtvEvent = async (req, res) => {
  try {
    console.log("userID",req.userId)
    console.log( { CPF: atob(req.params.CPF), idEvento: req.params.idEvento })
    const atividadesPessoa = await InscricaoAtividade.findAll({
      where: { CPF: req.userId, idEvento: req.params.idEvento },
      include: [{ model: Atividade, as: 'atividade' }],
    });


    return res.status(200).json(atividadesPessoa);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// seleciona as atividades que a pessoa não se inscreveu de um evento em especifico
exports.selectInscriAtvEventAll = async (req, res) => {
  try {
    const vetAtvEvt = [];
    const inscricao = await InscricaoAtividade.findAll({
      where: { CPF: req.userId, idEvento: req.params.idEvento },
      include: [{ model: Atividade, as: 'atividade' }],
    });
    console.log("req user aqui aqui aqui aqui ",req.params.idEvento);
    const atividade = await Atividade.findAll({
      where: { idEvento: req.params.idEvento },
      include: [
        { model: db.categoria, as: 'categoriaAtv' },
        { model: db.agenda, as: 'atvAgenda', through: { attributes: [] } },
      ],
    });



    if (!inscricao)
      return res.status(404).json({ error: 'Inscrição não encontrada' });
    if (!atividade)
      return res.status(404).json({ error: 'Atividade não encontrada' });

    // Monta um array com os idsAtividade dos eventos que o pessoa esta incrita de um evento em especifico
    const auxInsc = await inscricao.map(
      (Insc1) => Insc1.dataValues.idAtividade
    );

    atividade.map((atv) => {
      atv.dataValues.inscrito = auxInsc.includes(atv.dataValues.idAtividade);
      return atv;
    });

    return res.status(200).json(atividade);
  } catch (error) {
    return res.status(500).json(error);
  }
};
