const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


const eventos = require('./routes/evento');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

router.use('/evento', eventos);

app.use('/', router);

module.exports = app;
