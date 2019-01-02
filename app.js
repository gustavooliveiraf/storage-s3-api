const express = require('express');
const bodyParser = require('body-parser');
// var multer = require('multer');

var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// var uploadMulter = multer();
// app.use(uploadMulter.array());
// app.use(express.static('public'));

const upload = require('./services/multer');

const singleUpload = upload.single('image')
// const singleUpload2 = upload.single('image2')

app.use(singleUpload)
// app.use(singleUpload2)

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
