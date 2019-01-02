const router = require('express').Router()
const uploadController = require('../controllers/upload');

router.post('/', uploadController.upload)

module.exports = router
