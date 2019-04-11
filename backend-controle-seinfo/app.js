const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


const evento = require('./routes/evento');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

router.use('/evento', evento);

app.use('/', router);

module.exports = app;
