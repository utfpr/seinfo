const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db.config.js');


const app = express();


//const evento = require('./routes/evento');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

//router.use('/evento', evento);
require('./routes/evento.route.js')(app);

app.use('/', router);

module.exports = app;
