
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('categories').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {
          id: 1,
          recipe_id: 1,
          category_name: "dinner",
        },
      ]);
    });
};
