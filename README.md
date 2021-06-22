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
Criar o arquivo .env como o .env.example no backend.
Obs: Trocar o nome do banco de dados, usuário e senha no arquivo /backend-controle-seinfo/.env
```javascript
# Database
DB_HOST="localhost"
DB_PORT="3306"
DB_USER="usuario"
DB_PASS="senha"
DB_NAME="banco"
DB_DIALECT="mysql"
DB_POOL_MAX="5"
DB_POOL_MIN="0"
DB_POOL_ACQUIRE="3000"
DB_POOL_IDLE="10000"

```
Criar o arquivo dotenv.env.js como o dotenv.env.js.example no frontend.
~~~
'use strict'
module.exports = {
  VUE_APP_URL: '"ULR_API"'
}
~~~
## Licença
Este projeto se encontra sob a licença [MIT](http://opensource.org/licenses/MIT)
