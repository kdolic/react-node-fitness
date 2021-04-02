exports.seed = function(knex) {
  return knex("users").insert([
    {
      id: 1,
      username: "kdolic",
      password: "abc123",
      first_name: "Kenan",
      last_name: "Dolic",
      email: "kdolic@testing.com"
    },
    {
      id: 2,
      username: "danielwr",
      password: "password123",
      first_name: "Daniel",
      last_name: "Wright",
      email: "danielwr@testing.com"
    },
  ])
}
