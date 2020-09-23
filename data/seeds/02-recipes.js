
exports.seed = function (knex) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('recipes').insert([
        {
          user_id: 1,
          title: "lemon-salmon",
          source: "Joe bob",
          ingredients: "Salmon, lemon slics,",
          instructions: "wrap Salmon and lemon slices in tin foil. cook in oven at 350",
          category: "dinner"
        },

        {
          user_id: 2,
          title: "scrambled eggs",
          source: "Justin",
          ingredients: "Eggs, cheese, salt, pepper",
          instructions: "scramble the eggs, cook on med heat. add cheese, and salt to peper per taste",
          category: "breakfast"
        }


      ]);
};