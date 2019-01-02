const upload = require('../services/multer');
const singleUpload = upload.single('image')

module.exports = {
  upload(req, res) {
    singleUpload(req, res, function(err, some) {
      if (err) {
        return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}] });
      }

      return res.json({'imageUrl': req.file.location});
    });
  }
}