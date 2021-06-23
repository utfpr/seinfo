require("dotenv").config();
const db = require('../models/index.js');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const formatCPF = require('@fnando/cpf');

global.authorization = ''

async function criaTokens(object) {
  return jwt.sign(object, process.env.SECRET)
}

exports.autenticar =  async (req, res) => {
  await axios.post(process.env.URL_LDAP, {
      username: process.env.LOGIN_LDAP_USERNAME,
      password: process.env.LOGIN_LDAP_PASSWORD,
  }).then(response => {
    authorization = response.data.token;
    return authorization
  }).catch(ex => console.warn(ex));
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    db.pessoa.findOne({
      where: {
        CPF: formatCPF.strip(username)
      }}).then(async pessoa => {
        if(!pessoa) return res.status(400).send({message: "Usuário não encontrado"});

        if(pessoa.senha === password){
          const token = await criaTokens({idPessoa: pessoa.idPessoa, CPF: pessoa.cpf})
          return res.status(200).send({pessoa: {
            CPF: pessoa.dataValues.CPF, 
            nome: pessoa.dataValues.nome,
            email: pessoa.dataValues.email,
            nivel: pessoa.dataValues.nivel,
            classificacao: pessoa.dataValues.classificacao,
            idPessoa: pessoa.dataValues.idPessoa,
          }, message: "FUNCIONOU", token: token})
        }

        return res.status(400).send({message: "Senha incorreta"});
      }).catch(err => {
        return res.status(500).send("Error -> " + err);
      })
}

exports.loginLDAP = async (req, res) => {
  const { username, password } = req.body;
  
  await axios.post(process.env.LOGIN_URL_LDAP, {
      username: username,
      password: password,
  }, { headers: { Authorization:` Bearer ${authorization}` } }).then(response => {
      console.log(response.data);
      res.send(response.data);
      return(response.data);
  }).catch(ex => {
      console.log(ex.response.data.status);
      alert("RA ou senha incorretos.");
      return res.status(500).send("Error -> " + ex);
      //Colocar um alerta que senha ou usuário estão errados e enviar ele para a mesma página
  });
}