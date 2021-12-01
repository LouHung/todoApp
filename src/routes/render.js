const express = require('express');
const router = express.Router();
const model = require('../model/model')
const renderController = require('../cotroller/renderController')

router.get('/', renderController.get)
// router.post('/', renderController.post)
// router.delete('/', renderController.delete)

module.exports = router