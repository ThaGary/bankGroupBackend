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
    }
}