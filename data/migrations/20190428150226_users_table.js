exports.up = function(knex, Promise) {
 return knex.schema.createTable('users', function(tbl) {
  //primary key called id, integer, auto-increment
  tbl.increments();

  tbl.string('name', 128).notNullable();
  tbl
   .integer('role_id')
   .unsigned()
   .references('id')
   .inTable('roles')
   .onDelete('CASCADE')
   .onUpdate('CASCADE');
  tbl.timestamps(true, true);
  // another field
 });
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTableIfExists('users');
};
