exports.seed = function(knex) {
  return knex("exercises").insert([
    {
      id: 1,
      exercise_name: "Incline Barbell Bench Press",
      sets: 3,
      reps: 12,
      user_id: 1,
    },
    {
      id: 2,
      exercise_name: "DB Shoulder Press",
      sets: 4,
      reps: 10,
      user_id: 1,
    },
    {
      id: 3,
      exercise_name: "DB Bicep Curls",
      sets: 4,
      reps: 12,
      user_id: 2,
    },
    {
      id: 4,
      exercise_name: "Lat Pulldown",
      sets: 4,
      reps: 8,
      user_id: 2,
    },
  ])
}
