// implement changes to the schema
exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', tbl => {
      // each table needs a primary key
      // we'll call it id, integer, auto-increment
      tbl.increments();
      tbl.string('name', 128).notNullable().unique();
      tbl.timestamps(true, true); // create_at and update_at
  })
};

// undo the changes
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('roles');
};