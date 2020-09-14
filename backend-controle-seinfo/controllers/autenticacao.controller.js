const db = require('../models/index.js');
const axios = require('axios');

const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/env');

const app = express();

global.authorization = ''

async function criaTokens(object) {
  return jwt.sign(object, "Provisório")
}

exports.autenticar =  async (req, res) => {
    const dados = await axios.post('http://200.134.18.85:19881/login', {
        username: 'seinfo',
        password: 'G7OfSOwu',
    }).then(response => {
      authorization = response.data.token;
      //console.log(authorization);
      return authorization
        console.log(response.data);
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
        CPF: username
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
    

     const dados = await axios.post('http://200.134.18.85:19881/ldap/doLogin', {
         username: '',
         password: '',
     }, { headers: { Authorization: `Bearer ${authorization}` } }).then(response => {
         console.log(response.data);
         res.send(response.data);
     }).catch(ex => {
         res.send(ex)
         console.warn(ex);
     });
}
