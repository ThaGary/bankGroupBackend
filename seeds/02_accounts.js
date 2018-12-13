
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(() => {
      // Inserts seed entries
      return knex('accounts').insert([
        {
          account_name: 'yuh',
          bank_name: 'navyfed',
          account_type: 'savings',
          user_id: 1,
        },
        {
          account_name: 'yeet',
          bank_name: 'first bank',
          account_type: 'checking',
          user_id: 2,
        },
        {
          account_name: 'esketit',
          bank_name: 'citi',
          account_type: 'savings',
          user_id: 3,
        },
        {
          account_name: 'noice',
          bank_name: 'wells fargo',
          account_type: 'money market',
          user_id: 4,
        },
        {
          account_name: 'yesn\'t',
          bank_name: 'capital one',
          account_type: 'checking',
          user_id: 5,
        }
      ]);
    });
};
