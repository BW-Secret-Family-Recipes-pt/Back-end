
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          id: 1,
          recipe_id: 1,
          quantity: "2",
          unit_type: "cup",
          ingredient_name: "rice"
        },
      ]);
    });
};
