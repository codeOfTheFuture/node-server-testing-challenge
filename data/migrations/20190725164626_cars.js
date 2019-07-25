exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();

    tbl.string('make', 128).notNullable();

    tbl.string('model', 128).notNullable();

    tbl.string('year', 4).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cars');
};
