const express = require('express')
const router = express.Router()
const taskController = require('../controller/taskController')


router.get('/',taskController.getapp)
router.post('/add',taskController.addtask)
router.post('/clear-completed',taskController.clear)
router.post('/toggle/:id',taskController.toggle)
router.post('/delete/:id',taskController.deleteTask)

module.exports = router