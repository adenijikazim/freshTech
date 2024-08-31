const express = require('express')
const { createTransaction, getTransaction } = require('../controllers/transactionHistory')
const transactionRouter = express.Router()

transactionRouter.post('/', createTransaction)
transactionRouter.get('/', getTransaction)

module.exports = transactionRouter