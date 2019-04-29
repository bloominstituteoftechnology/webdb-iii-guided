// exports.seed = function(knex, Promise) {
exports.seed = function(knex) {
 // Deletes ALL existing entries
 //  no more need in truncate as we use knex-cleaner
 //  return knex('roles')
 //   .truncate() // reset all id
 //   .then(function() {
 // Inserts seed entries
 return knex('roles').insert([
  { name: 'student' },
  { name: 'pm' },
  { name: 'ta' },
 ]);
 //   });
};
