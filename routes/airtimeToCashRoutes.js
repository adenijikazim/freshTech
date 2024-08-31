const express = require('express')
const authenticateUser = require('../middlewares/authenticate')
const fillInfo = require('../controllers/airtimeToCash')
const router = express.Router()

router.post('/', authenticateUser, fillInfo)

module.exports = router