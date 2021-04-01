
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users.increments();
    users.string('username', 32).notNullable().unique();
    users.string('password', 32).notNullable();
    users.string('first_name', 100).notNullable();
    users.string('last_name', 100).notNullable();
    users.string('email', 100).notNullable();
  })
  .createTable('exercises', tbl => {
    tbl.increments();
    tbl.string('exercise_name', 100).notNullable();
    tbl.integer('sets')
       .notNullable()
       .unsigned()
    tbl.integer('reps')
       .notNullable()
       .unsigned()
  })
  .createTable('goals', tbl => {
    tbl.increments();
    tbl.string('goal_name', 100).notNullable();
})
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('goals')
    .dropTableIfExists('exercises')
    .dropTableIfExists('users')
};
