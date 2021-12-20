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

#EMAIL
#Caso estiver usando o gmail vai ser necessario criar uma senha de aplicativo.
SENDER_EMAIL="email@email.com"
LOGIN_EMAIL="email@email.com"
PASSWORD_EMAIL="senha"
HOST_EMAIL="host.email.com"
PORT_HOST_EMAIL=587

#LDAP
URL_LDAP="URL E ROTA AQUI"
LOGIN_URL_LDAP="URL E ROTA AQUI"
LOGIN_LDAP_USERNAME="usuario"
LOGIN_LDAP_PASSWORD="senha"

#SECRET
SECRET="escreva o secret aqui"
```
Criar o arquivo dotenv.env.js como o dotenv.env.js.example no frontend.
~~~
'use strict'
module.exports = {
  VUE_APP_URL: '"ULR_API"'
}
~~~
#### Rodar ambiente com docker
Caso tenha dúvidas de como instalar o docker em seu sistema verifique os guias em https://docs.docker.com/get-docker/

Entre na raiz do projeto e execute o seguinte comando
```bash
docker-compose up
```
Serão criados containers para o frontend, backend e banco de dados.
O banco de dados é criado e populado automaticamente durante a primeira inicialização.
Caso queria ter acesso aos dados basta acessar o banco com o ip: 0.0.0.0 e porta 3307.

O arquivo base de ambiente para os containers é o .env.docker

## Licença
Este projeto se encontra sob a licença [MIT](http://opensource.org/licenses/MIT)
