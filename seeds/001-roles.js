exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {name: 'Web Student'},
        {name: 'Web TA'}
      ]);
    });
};
