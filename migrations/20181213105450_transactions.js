exports.up = function(knex, Promise) {
    return knex.schema.createTable('transactions', (transaction) => {
         entityInTable.increments('id')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('transactions’);
};
