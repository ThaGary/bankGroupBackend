exports.up = function (knex, Promise) {
    return knex.schema.createTable('transactions', (transaction) => {
        transaction.increments('id')
        transaction.specificType('title', 'CHAR(8)')
        transaction.boolean('status')
        transaction.integer('amount')
        transaction.integer('account_id').references('id').inTable('accounts')
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('transactions');
};