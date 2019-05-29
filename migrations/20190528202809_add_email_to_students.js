
exports.up = function(knex, Promise) {
  return knex.schema.table('students', tbl => {
      tbl.string('email');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('students', tbl => {
        tbl.dropColumn('email');
    })
};
