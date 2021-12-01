const express = require('express');
const router = express.Router();
const model = require('../model/model')
const taskController = require('../cotroller/taskController')

router.get('/', taskController.get)
router.post('/', taskController.post)
router.delete('/deleteAll', taskController.deleteAll)
router.delete('/', taskController.delete)
router.put('/', taskController.update)

module.exports = router