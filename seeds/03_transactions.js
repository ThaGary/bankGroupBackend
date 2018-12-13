
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('transactions').del()
    .then(function () {
      // Inserts seed entries
      return knex('transactions').insert([
        {
          title: 'MyMoney1',
          status: true,
          amount: 420,
          account_id: 1,
        },
        {
          title: 'MyMoney2',
          status: true,
          amount: 1337,
          account_id: 2,
        },
        {
          title: 'MyMoney3',
          status: false,
          amount: 100000000,
          account_id: 3,
        },
        {
          title: 'MyMoney4',
          status: true,
          amount: 6969,
          account_id: 1,
        },
        {
          title: 'MyMoney5',
          status: false,
          amount: 420,
          account_id: 1,
        },
      ]);
    });
};
