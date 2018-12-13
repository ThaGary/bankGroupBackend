
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'Garberries',
          first_name: 'Gary',
          last_name: 'Anderson',
          email: 'sample@email.com',
          password: 'abc',
        },
        {
          username: 'Beans',
          first_name: 'Ben',
          last_name: 'Rumsey',
          email: 'sample@email.com',
          password: 'abc',
        },
        {
          username: 'GlitteringPotato',
          first_name: 'Charity ',
          last_name: 'Van Buren',
          email: 'sample@email.com',
          password: 'abc',
        },
        {
          username: 'doreido',
          first_name: 'Reid',
          last_name: 'Garner',
          email: 'sample@email.com',
          password: 'abc',
        },
        {
          username: 'Petetatos',
          first_name: 'Peter',
          last_name: 'Fu',
          email: 'sample@email.com',
          password: 'abc',
        }
      ]);
    });
};
