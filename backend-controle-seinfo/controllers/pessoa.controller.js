const nodemailer = require('nodemailer');
const formatCPF = require('@fnando/cpf');
const db = require('../models/index');
require('dotenv').config();

const Pessoa = db.pessoa;

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
  console.log(senha);

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
    console.log(err);
    res.status(500).send(`Error -> ${err}`);
  }
};

exports.findById = (req, res) => {
  Pessoa.findOne({ where: { CPF: atob(req.params.CPF) } })
    .then((pessoa) => {
      if (!pessoa) {
        res.send('Pessoa não encontrada'); // Retorna um Json para a Pagina da API
      }
      console.log(`Achou uma Pessoa pelo ID ${req.params.idPessoa}`);
      res.send(pessoa); // Retorna um Json para a Pagina da API
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.findAll = (req, res) => {
  Pessoa.findAll()
    .then((pessoa) => {
      console.log('Listou Todas as Pessoas!');
      res.send(pessoa); // Retorna um Json para a Pagina da API
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.atualiza = (req, res) => {
  const { nome, email, nivel } = req.body;
  const CPF = atob(req.params.CPF);
  Pessoa.update(
    {
      nome,
      email,
      nivel,
    },
    { where: { CPF } }
  )
    .then((pessoa) => {
      console.log('Atualizando uma Pessoa', pessoa);
      res.send('Dados atualizados com sucesso!');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Error ${err}`);
    });
};

exports.recuperarSenha = (req, res) => {
  try {
    Pessoa.findOne({ where: { CPF: formatCPF.strip(atob(req.params.CPF)) } })
      .then((pessoa) => {
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
            if (error) {
              console.log(error);
            } else {
              console.log('Email enviado com sucesso.');
            }
          });
          pessoa.update({ senha });
          return res
            .status(200)
            .send(`Email de recuperação enviado para:${pessoa.email}`);
        }
        res.status(404).send('Usuário não cadastrado');
        return undefined;
      })
      .catch((err) => {
        res.status(404).send(`Error ${err}`);
      });
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error ${err}`);
  }
};

exports.delete = (req, res) => {
  Pessoa.destroy({ where: { CPF: atob(req.params.CPF) } })
    .then(() => {
      // console.log(`Deletando uma Pessoa com o ID: ${req.params.CPF}`);
      res.send(`${req.params.CPF} foi deletado`); // Retorna um Json para a Pagina da API
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.PessoaExistente = (req, res) => {
  Pessoa.findOne({ where: { CPF: atob(req.params.CPF) } })
    .then((pessoa) => {
      if (pessoa) {
        res.send(true);
      } else {
        res.send(false);
      }
      // return true
    })
    .catch((err) => {
      res.status(500).send(err);
      // return false
    });
};

//----------------------------------------------------------------------------------------------------

exports.cadastrarEmEvento = (req, res) => {
  Pessoa.findOne({ where: { CPF: atob(req.params.CPF) } }).then((pessoa) => {
    db.evento
      .findOne({ where: { idEvento: req.params.idEvento } })
      .then((evento) => {
        db.inscricaoEvento
          .create({
            dataInscricao: req.body.dataInscricao,
            idEvento: evento.idEvento,
            CPF: pessoa.CPF,
          })
          .then((inscriEv) => {
            res.send(inscriEv);
          })
          .catch((err) => {
            res.status(500).send(`Error -> ${err}`);
          });
      });
  });
};

exports.deletaInscricaoEvento = (req, res) => {
  db.inscricaoEvento
    .destroy({
      where: { idEvento: req.params.idEvento, CPF: atob(req.params.CPF) },
    })
    .then(() => {
      res.send('deletou');
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.selectInscricaoEvento = (req, res) => {
  // seleciona todos inscritos em todos eventos
  db.inscricaoEvento
    .findAll({
      include: [
        { model: db.pessoa, as: 'pessoaInsc' },
        { model: db.evento, as: 'eventoInsc' },
      ],
    })
    .then((pessoaEv) => {
      res.send(pessoaEv);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.selectInscrito = (req, res) => {
  // seleciona um inscrito em um evento
  db.inscricaoEvento
    .findOne({
      where: { idEvento: req.params.idEvento, CPF: atob(req.params.CPF) },
      include: [
        { model: db.pessoa, as: 'pessoaInsc' },
        { model: db.evento, as: 'eventoInsc' },
      ],
    })
    .then((pessoaEv) => {
      res.send(pessoaEv);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.InscricoesNoEvento = (req, res) => {
  // seleciona todos inscritos em um evento
  db.inscricaoEvento
    .findAll({
      where: { idEvento: req.params.idEvento },
      include: [
        { model: db.pessoa, as: 'pessoaInsc' },
        { model: db.evento, as: 'eventoInsc' },
      ],
    })
    .then((pessoaEv) => {
      res.send(pessoaEv);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.InscricoesPessoa = (req, res) => {
  // seleciona todos eventos que a pessoa se inscreveu
  db.inscricaoEvento
    .findAll({
      where: { CPF: atob(req.params.CPF) },
      include: [
        { model: db.pessoa, as: 'pessoaInsc' },
        { model: db.evento, as: 'eventoInsc' },
      ],
    })
    .then((pessoaEv) => {
      res.send(pessoaEv);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

//----------------------------------------------------------------------------------------------------------

exports.cadastrarEmAtividade = (req, res) => {
  db.inscricaoEvento
    .findOne({
      where: { idEvento: req.params.idEvento, CPF: atob(req.params.CPF) },
    })
    .then((inscricao) => {
      db.inscricaoAtividade
        .create({
          dataInscricao: req.body.dataInscricao,
          idEvento: inscricao.idEvento,
          CPF: inscricao.CPF,
          idAtividade: req.body.idAtividade,
        })
        .then((inscriAtv) => {
          res.send(inscriAtv);
        })
        .catch((err) => {
          res.status(500).send(`Error -> ${err}`);
        });
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.index = async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    return res.status(200).send(pessoas);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.deletaInscricaoAtividade = (req, res) => {
  db.inscricaoAtividade
    .destroy({
      where: {
        idEvento: req.params.idEvento,
        idAtividade: req.params.idAtividade,
        CPF: atob(req.params.CPF),
      },
    })
    .then(() => {
      res.send('deletou');
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.selectInscricaoAtividade = (req, res) => {
  // seleciona todas pessoas inscritas em todas atividades
  db.inscricaoAtividade
    .findAll({
      include: [
        { model: db.atividade, as: 'atividade' },
        {
          model: db.inscricaoEvento,
          as: 'eventoInsc',
          include: [
            { model: db.evento, as: 'eventoInsc' },
            { model: db.pessoa, as: 'pessoaInsc' },
          ],
        },
      ],
    })
    .then((pessoaAtv) => {
      res.send(pessoaAtv);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.selectInscritoAtv = (req, res) => {
  // seleciona um inscrito em uma atividade
  db.inscricaoAtividade
    .findOne({
      where: {
        idEvento: req.params.idEvento,
        idAtividade: req.params.idAtividade,
        CPF: atob(req.params.CPF),
      },
      include: [
        { model: db.atividade, as: 'atividade' },
        {
          model: db.inscricaoEvento,
          as: 'eventoInsc',
          include: [
            { model: db.evento, as: 'eventoInsc' },
            { model: db.pessoa, as: 'pessoaInsc' },
          ],
        },
      ],
    })
    .then((pessoaAtv) => {
      res.send(pessoaAtv);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.selectInscricoesNaAtividade = (req, res) => {
  // seleciona as pessoas inscritas na ativdade
  db.inscricaoAtividade
    .findAll({
      where: {
        idAtividade: req.params.idAtividade,
        idEvento: req.params.idEvento,
      },
      include: [
        {
          model: db.inscricaoEvento,
          as: 'eventoInsc',
          include: [
            { model: db.evento, as: 'eventoInsc' },
            {
              model: db.pessoa,
              attributes: ['nome', 'email', 'CPF', 'nivel', 'classificacao'],
              as: 'pessoaInsc',
            },
          ],
        },
      ],
    })
    .then((insc) => {
      res.send(insc);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.selectInscricoesPessoa = (req, res) => {
  // seleciona as atividades que a pessoa se inscreveu
  db.inscricaoAtividade
    .findAll({
      where: { CPF: atob(req.params.CPF) },
      include: [{ model: db.atividade, as: 'atividade' }],
    })
    .then((insc) => {
      res.send(insc);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.selectInscriAtvEvent = (req, res) => {
  // seleciona as atividades que a pessoa se inscreveu de um evento em especifico
  db.inscricaoAtividade
    .findAll({
      where: { CPF: atob(req.params.CPF), idEvento: req.params.idEvento },
      include: [{ model: db.atividade, as: 'atividade' }],
    })
    .then((insc) => {
      res.send(insc);
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};

exports.selectInscriAtvEventAll = (req, res) => {
  // seleciona as atividades que a pessoa não se inscreveu de um evento em especifico
  const vetAtvEvt = [];

  db.inscricaoAtividade
    .findAll({
      where: { CPF: atob(req.params.CPF), idEvento: req.params.idEvento },
      include: [{ model: db.atividade, as: 'atividade' }],
    })
    .then((insc) => {
      db.atividade
        .findAll({
          where: { idEvento: req.params.idEvento },
          include: [
            { model: db.categoria, as: 'categoriaAtv' },
            { model: db.agenda, as: 'atvAgenda', through: { attributes: [] } },
          ],
        })
        .then((atividade) => {
          // Monta um array com os idsAtividade dos eventos que o pessoa esta incrita de um evento em especifico
          const auxInsc = insc.map((Insc1) => Insc1.dataValues.idAtividade);

          // Monta um array com todos os idsAtividades de um evento em especifico
          const auxAtv = atividade.map((Atv1) => Atv1.dataValues.idAtividade);

          // Monta um array com todos os idsAtividade na quala pessoa não esta inscrita
          const vetAtividade = auxAtv.filter((element) => {
            if (auxInsc.indexOf(element) === -1) return element;
            return undefined;
          });

          // Monta um array com todos os valores da atividade de acordo com o idAtividade
          atividade.filter((element) => {
            if (vetAtividade.indexOf(element.dataValues.idAtividade) !== -1)
              vetAtvEvt.push(element);
            return undefined;
          });

          res.send(vetAtvEvt);
        })
        .catch((err) => {
          res.status(500).send(`Error -> ${err}`);
        });
    })
    .catch((err) => {
      res.status(500).send(`Error -> ${err}`);
    });
};
