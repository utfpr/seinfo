<img src="http://portal.utfpr.edu.br/icones/cabecalho/logo-utfpr/@@images/7a0abbb5-f7ea-4c9f-85e2-18aed1cd8a0d.png" align="right" height="100"/>

# Controle de Eventos - SeInfo (COE)


## Descrição
Sistema para gerenciamento de cobranças, presenças e inscrições para os eventos, sendo desenvolvido pelos alunos da disciplina Programação de Aplicativos (BCC34F) turma IC4A de 2019/1 da Universidade Tecnológica Federal do Paraná - [UTFPR](http://portal.utfpr.edu.br).

#### Desenvolvido com
- [Vue.js](https://vuejs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [NodeJS](https://nodejs.org)
- [MariaDB](https://mariadb.org)


#### Como usar
Após baixar o projeto, entre dentro da pasta /frontend-controle-seinfo e digite o comando abaixo para baixar todas as dependencias:
```bash
npm install
```
Logo em seguida coloque o servidor para rodar com o comando:
```bash
npm run dev
```
Para iniciar o backend, abra o terminal na pasta /backend-controle-seinfo e digite o comando: 
```bash
npm install
```
Logo em seguida inicia o servidor do backend utilizando o seguinte comando:
```bash
npm run dev
```

Obs: Trocar o nome do banco de dados, usuário e senha no arquivo /backend-controle-seinfo/api/index.js
```javascript
function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'seu_usuario',
    password : 'sua_senha',
    database : 'seu_banco_dados'
  });

```

## Licença
Este projeto se encontra sob a lincença [MIT](http://opensource.org/licenses/MIT)
