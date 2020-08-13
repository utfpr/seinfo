const db = require('../models/index.js');
const config = require('../config/env')
const axios = require('axios');

const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

global.authorization = ''

async function criaTokens(object) {
  return jwt.sign(object, config.secret)
}

exports.autenticar =  async (req, res) => {
    const dados = await axios.post(config.urlLDAP, {
        username: config.loginLDAP.username,
        password: config.loginLDAP.password,
    }).then(response => {
        // console.log(response.data);
        authorization = response.data.token;
        return authorization
    }).catch(ex => console.warn(ex));
    // res.status(200).send(dados);
};

exports.login = async (req, res) => {
    const { params, body } = req;

    const { username, password } = body;

    db.pessoa.findOne({
      where: {
        cpf: username
      }}).then(async pessoa => {
        if(!pessoa) return res.status(400).send({message: "Usuário não encontrado"});

        if(pessoa.senha === password){
          const token = await criaTokens({idPessoa: pessoa.idPessoa, CPF: pessoa.cpf})
          return res.status(200).send({pessoa: pessoa.dataValues, message: "FUNCIONOU", token: token})
        }

        return res.status(400).send({message: "Senha incorreta"});
      }).catch(err => {

        return res.status(500).send("Error -> " + err);
      
      })
    
    // const dados = await axios.post(config.urlLDAPLogin, {
    //     user: username,
    //     password,
    // }, { headers: { Authorization: `Bearer ${authorization}` } }).then(response => {
    //     console.log(response.data);
    //     res.send(response.data);
    // }).catch(ex => {
    //     res.send(ex)
    //     console.warn(ex);
    // });
}
