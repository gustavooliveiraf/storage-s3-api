const express = require('express');
const bodyParser = require('body-parser');

var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const upload = require('./services/multer');

const singleUpload = upload.single('image')

app.use(singleUpload)

app.post('/image-upload', (req, res) => {
  singleUpload(req, res, function(err, some) {
    if (err) {
      return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}] });
    }

    return res.json({'imageUrl': req.file.location});
  });
})

app.get('/', (req, res) => res.status(200).send({
  message: 'Servidor client em pé!',
}));

app.get('*', (req, res) => res.status(200).send({
  message: 'Rota não encontrada, você digitou certo?',
}));

module.exports = app;
