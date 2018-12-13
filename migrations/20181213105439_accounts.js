exports.up = function (knex, Promise) {
    return knex.schema.createTable('accounts', (account) => {
        account.increments('id')
        account.string('account_name')
        account.string('bank_name')
        account.string('account_type')
        account.integer('user_id').references('id').inTable('users')
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('accounts');
};