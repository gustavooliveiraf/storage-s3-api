const express = require('express');
const bodyParser = require('body-parser');

const uploadRouter = require('./server/routers/upload')

var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/image-upload', uploadRouter)

app.get('/', (req, res) => res.status(200).send({
  message: 'Servidor client em pé!',
}));

app.get('*', (req, res) => res.status(200).send({
  message: 'Rota não encontrada, você digitou certo?',
}));

module.exports = app;
