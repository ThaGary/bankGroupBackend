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
app.get('/users/:id', (req, res) => {
    queries.getUsersById(req.params.id).then(user => res.status(200).send(user))
})
app.get('/accounts/:id', (req, res) => {
    queries.getAccountsById(req.params.id).then(account => res.status(200).send(account))
})
app.get('/transactions/:id', (req, res) => {
    queries.getTransactionsById(req.params.id).then(transaction => res.status(200).send(transaction))
})
app.post('/users', (req, res) => {
    queries.createUser(req.body).then(user => res.send(user))
})
app.post('/accounts', (req, res) => {
    queries.createAccount(req.body).then(account => res.send(account))
})
app.post('/transactions', (req, res) => {
    queries.createTransaction(req.body).then(transaction => res.send(transaction))
})
app.put('/users/:id', (req, res) => {
    queries.updateUser(req.params.id, req.body).then(updateUser => res.send(updateUser))
})
app.put('/accounts/:id', (req, res) => {
    queries.updateAccount(req.params.id, req.body).then(updateAccount => res.send(updateAccount))
})
app.put('/transactions/:id', (req, res) => {
    queries.updateTransaction(req.params.id, req.body).then(updateTransaction => res.send(updateTransaction))
})


app.listen(port, () => {
    console.log('listening on port:', port)
})