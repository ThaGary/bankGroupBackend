exports.up = function(knex, Promise) {
    return knex.schema.createTable('accounts', (account) => {
         entityInTable.increments('id')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('accounts’);
};
