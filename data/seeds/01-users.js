const bcrypt = require('bcryptjs');


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'test1', email: "test1@email.com",password: bcrypt.hashSync("test123", 12)},
        {username: 'test2',  email: "test2@email.com",password: bcrypt.hashSync("test123", 12)}
      ]);
    });
};
