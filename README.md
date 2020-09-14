<img src="https://github.com/utfpr/seinfo/blob/master/frontend-controle-seinfo/src/assets/utfpr.jpg" align="right" height="100"/>

# Controle de Eventos - SeInfo (CDE)


## Descrição
Sistema para gerenciamento de cobranças, presenças e inscrições para os eventos, sendo desenvolvido pelos alunos da disciplina Programação de Aplicativos (BCC34F) turma IC4A de 2019/1 da Universidade Tecnológica Federal do Paraná - [UTFPR](http://portal.utfpr.edu.br).

#### Desenvolvido com
- [Vue.js](https://vuejs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [NodeJS](https://nodejs.org)
- [MariaDB](https://mariadb.org)
- [Ant Design Vue](https://vue.ant.design/docs/vue/introduce/)


#### Como usar
Após baixar o projeto, entre dentro da pasta /frontend-controle-seinfo e digite o comando abaixo para baixar todas as dependencias:
```bash
npm install
```
Logo em seguida coloque o servidor para rodar com o comando:
```bash
npm start
```
Para iniciar o backend, abra o terminal na pasta /backend-controle-seinfo e digite o comando: 
```bash
npm install
```
Logo em seguida inicia o servidor do backend utilizando o seguinte comando:
```bash
npm start
```

Obs: Trocar o nome do banco de dados, usuário e senha no arquivo /backend-controle-seinfo/config/env.js
```javascript
const env = {
    database: 'seu_banco_de_dados',
    username: 'seu_usuario',
    password: 'sua_senha',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
module.exports = env;

```

## Licença
Este projeto se encontra sob a licença [MIT](http://opensource.org/licenses/MIT)
