exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users.increments();
    users.string('username', 100).notNullable()
    users.string('password', 100).notNullable();
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
    tbl.integer("user_id")
       .notNullable()
       .unsigned()
       .references("id")
       .inTable("users")
       .onDelete("CASCADE")
       .onUpdate("CASCADE")
  })
  .createTable('goals', tbl => {
    tbl.increments();
    tbl.string('goal_name', 100).notNullable();
    tbl.integer("user_id")
       .notNullable()
       .unsigned()
       .references("id")
       .inTable("users")
       .onDelete("CASCADE")
       .onUpdate("CASCADE")
})
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('goals')
    .dropTableIfExists('exercises')
    .dropTableIfExists('users')
};
