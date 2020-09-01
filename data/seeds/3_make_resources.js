exports.seed = async function (knex) {
	await knex('resources').insert([
		// first project
		{ id: 1, name: 'Clothespins' },
		{ id: 2, name: 'Popsicle stick' },
		{ id: 3, name: 'Glue' },
		{ id: 4, name: 'Scissors' },
		// second project
		{ id: 5, name: 'Regular cupcake liner' },
		{ id: 6, name: 'Mini cupcake liner' },
		{ id: 7, name: 'Large sticker rhinestones' },
		{ id: 8, name: 'Crafter’s tape' },
		{ id: 9, name: 'Construction paper' },
	]);
};