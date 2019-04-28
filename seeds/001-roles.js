exports.seed = function(knex, Promise) {
 // Deletes ALL existing entries
 return knex('roles')
  .truncate() // reset all id
  .then(function() {
   // Inserts seed entries
   return knex('roles').insert([
    { name: 'student' },
    { name: 'pm' },
    { name: 'ta' },
   ]);
  });
};
