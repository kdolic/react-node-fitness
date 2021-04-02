exports.seed = function(knex) {
  return knex("goals").insert([
    {
      id: 1,
      goal_name: "Hit 225lbs on Incline for 5 reps",
      user_id: 1,
    },
    {
      id: 2,
      goal_name: "Reach 80lb DB Shoulder Press for 6 reps",
      user_id: 1,
    },
    {
      id: 3,
      goal_name: "Hit 50lb DB curls for 8 reps",
      user_id: 2,
    },
    {
      id: 4,
      goal_name: "Reach 205lb pulldowns for 6 reps",
      user_id: 2,
    },
  ])
}

