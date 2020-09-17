
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1,
          user_id: 1,
          recipe_name: "recipe1",
          source: "source1",
          recipe_instructions: "instructions1"
        },

        {
          id: 2,
          user_id: 2,
          recipe_name: "recipe2",
          source: "source2",
          recipe_instructions: "instructions2"
        }


      ]);
    });
};