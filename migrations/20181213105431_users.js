exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', (user) => {
        user.increments('id')
        user.string('username')
        user.string('first_name')
        user.string('last_name')
        user.string('email')
        user.string('password')
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists('users');
};