exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (user) => {
         entityInTable.increments('id')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users’);
};
