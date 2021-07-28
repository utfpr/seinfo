require('dotenv').config();
const axios = require('axios');
const jwt = require('jsonwebtoken');
const formatCPF = require('@fnando/cpf');
const db = require('../models');

let authorization = '';

const criaTokens = async (object) =>
  jwt.sign(object, process.env.SECRET, { expiresIn: 9000 });

exports.autenticar = async (req, res) => {
  await axios
    .post(process.env.URL_LDAP, {
      username: process.env.LOGIN_LDAP_USERNAME,
      password: process.env.LOGIN_LDAP_PASSWORD,
    })
    .then((response) => {
      authorization = response.data.token;
      return authorization;
    })
    .catch((err) => console.warn(err));
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  return db.pessoa
    .findOne({
      where: {
        CPF: formatCPF.strip(username),
      },
    })
    .then(async (pessoa) => {
      if (!pessoa)
        return res.status(404).send({ message: 'Usuário não encontrado' });
      const { CPF, nome, email, nivel, classificacao, idPessoa, senha } =
        pessoa.dataValues;

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
      return res.status(401).send({ message: 'Senha incorreta' });
    })
    .catch((err) => res.status(500).send(err));
};

exports.loginLDAP = async (req, res) => {
  const { username, password } = req.body;
  const { data } = await axios.post(`${process.env.URL_LDAP}`, {
    username: process.env.LOGIN_LDAP_USERNAME,
    password: process.env.LOGIN_LDAP_PASSWORD,
  });

  axios
    .post(
      process.env.LOGIN_URL_LDAP,
      {
        username,
        password,
      },
      { headers: { Authorization: `Bearer ${data.token}` } }
    )
    .then((response) => {
      res.send(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err.data);
      console.log('RA ou senha incorretos.');
      return res.status(401).send(err);
    });
};
