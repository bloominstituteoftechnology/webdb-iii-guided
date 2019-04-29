const cleaner = require('knex-cleaner');
// will prevent foreign key errors
// when trying to truncate the tables that have
// FK poining to them
exports.seed = function(knex) {
 // Deletes ALL existing entries
 return cleaner.clean(knex);
 // afer this command, all tables are empty
 // and all primary keys are reset
};
