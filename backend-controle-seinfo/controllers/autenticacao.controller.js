require('dotenv').config();
const axios = require('axios');
const jwt = require('jsonwebtoken');
const db = require('../models');

const Pessoa = db.pessoa;

const { generateHash } = require('../utils/hash');

const criaTokens = async (object) =>
  jwt.sign(object, process.env.SECRET, {
    expiresIn: 9000,
  });

exports.autenticar = async () => {
  try {
    const response = await await axios.post(process.env.URL_LDAP, {
      username: process.env.LOGIN_LDAP_USERNAME,
      password: process.env.LOGIN_LDAP_PASSWORD,
    });

    return response.data.token;
  } catch (error) {
    return error;
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const pessoa = await Pessoa.findOne({
      where: {
        CPF: username,
      },
    })
    .then(async (pessoa) => {
      if (!pessoa)
        return res.status(404).send({ message: 'Usuário não encontrado' });
      const { CPF, nome, email, nivel, classificacao, idPessoa, senha } =
        pessoa.dataValues;
      console.log(pessoa.dataValues);
      if (senha === password) {
        const token = await criaTokens({
          idPessoa,
          CPF: pessoa.cpf,
        });
        return res.send({
          pessoa: {
            CPF,
            nome,
            email,
            nivel,
            classificacao,
            idPessoa,
          },
          token,
        });
      }
    });

    if (!pessoa)
      return res.status(404).send({ message: 'Usuário não encontrado' });

    const { CPF, nome, email, nivel, classificacao, idPessoa, senha } =
      pessoa.dataValues;

    if (!(senha === generateHash(password)))
      return res.status(401).send({ message: 'Senha incorreta' });

    const token = await criaTokens({
      idPessoa,
      CPF: pessoa.cpf,
    });
    return res.status(200).json({
      pessoa: {
        CPF,
        nome,
        email,
        nivel,
        classificacao,
        idPessoa,
      },
      token,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.loginLDAP = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { data } = await axios.post(`${process.env.URL_LDAP}`, {
      username: process.env.LOGIN_LDAP_USERNAME,
      password: process.env.LOGIN_LDAP_PASSWORD,
    });

    const ldapLogin = await axios.post(
      process.env.LOGIN_URL_LDAP,
      {
        username,
        password,
      },
      {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }
    );

    return res.status(200).json(ldapLogin);
  } catch (error) {
    if (error.response.status === 401) {
      return res
        .status(403)
        .json({ error: 'Dados de usuário ou senha incorretos' });
    }
    return res.status(500).json(error);
  }
};
