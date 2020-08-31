
exports.seed = async function (knex) {
	await knex('projects').insert([
		{
			id: 1,
			projectCompleted: false,
			name: 'Airplane Clothespin Kids Craft',
		},
		{ id: 2, projectCompleted: false, name: 'Cupcake Liner Flowers' },
	]);
};