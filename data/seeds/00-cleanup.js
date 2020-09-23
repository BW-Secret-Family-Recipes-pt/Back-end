exports.seed = async function(knex) {
	await knex("users").del()
	await knex("recipes").del()
}