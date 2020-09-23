
exports.seed = function (knex) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('recipes').insert([
        {
          user_id: 1,
          title: "recipe1",
          source: "source1",
          ingredients: "ingredients1",
          instructions: "instructions1",
          category: "category1"
        },

        {
          user_id: 2,
          title: "recipe2",
          source: "source2",
          ingredients: "ingredients2",
          instructions: "instructions2",
          category: "category2"
        }


      ]);
};