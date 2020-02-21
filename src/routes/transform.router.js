const express = require('express')
const router = express.Router()
const controller = require('../controllers/transform.controller')

//Relatório
router.post('/transform-data', controller.transformData)

module.exports = router