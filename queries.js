const db = require('./database-connections');
module.exports = {
    getAllUsers() {
        return db('users')
    },
    getAllAccounts() {
        return db('accounts')
    },
    getAllTransactions() {
        return db('transactions')
    },
    getUsersById(id) {
        return db('users')
            .where('id', id)
            .first()
    },
    getAccountsById(id) {
        return db('accounts')
            .where('id', id)
            .first()
    },
    getTransactionsById(id) {
        return db('transactions')
            .where('id', id)
            .first()
    },
    createUser(newUser) {
        return db('users')
            .insert(newUser)
            .returning('*')
    },
    createAccount(newAccount) {
        return db('users')
            .insert(newAccount)
            .returning('*')
    },
    createTransaction(newTransaction) {
        return db('users')
            .insert(newTransaction)
            .returning('*')
    },



}