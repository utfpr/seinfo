<img src="http://portal.utfpr.edu.br/icones/cabecalho/logo-utfpr/@@images/7a0abbb5-f7ea-4c9f-85e2-18aed1cd8a0d.png" align="right" height="100"/>

# Controle de Eventos - SeInfo (COE)


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
node index.js 
```

Obs: Trocar o nome do banco de dados, usuário e senha no arquivo /backend-controle-seinfo/index.js
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


DACOM-CM SEINFO
