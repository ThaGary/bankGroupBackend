const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/users', (req, res) => {
    queries.getAllUsers().then(users => res.send(users))

})
app.get('/accounts', (req, res) => {
    queries.getAllAccounts().then(accounts => res.send(accounts))
})
app.get('/transactions', (req, res) => {
    queries.getAllTransactions().then(transactions => res.send(transactions))
})

app.listen(port, () => {
    console.log('listening on port:', port)
})