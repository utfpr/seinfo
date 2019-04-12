const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db.config.js');


const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

//Chamo todas as minhas Rotas aqui
require('./routes/evento.route.js')(app);
app.use('/', router);

module.exports = app;
