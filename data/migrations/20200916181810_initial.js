exports.up = function (knex) {
   //aadd
    return knex.schema
       .createTable('users', tbl => {
          tbl.increments();
          tbl.string('username', 128).notNullable().unique();
          tbl.string('password', 128).notNullable()
          tbl.string('email', 256).notNullable().unique();
       })
       .createTable('recipes', tbl => {
         //creates a primary key called id
         tbl.increments();
         tbl.text('title').notNullable();
         tbl.text('source').notNullable();
         tbl.text('ingredients').notNullable();
         tbl.text('instructions').notNullable();
         tbl.text('category').notNullable();
         tbl.integer('user_id')
           // forces integer to be positive
           .unsigned()
           .notNullable()
           .references('id')
           // this table must exist already
           .inTable('users')
           .onDelete('CASCADE')
           .onUpdate('CASCADE');
       })
 };
 
 exports.down = function (knex) {
    return knex.schema
       .dropTableIfExists('recipes')
       .dropTableIfExists('users')
 };