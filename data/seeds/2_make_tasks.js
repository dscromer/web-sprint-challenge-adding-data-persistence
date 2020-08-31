exports.seed = async function (knex) {
	await knex('tasks').insert([
		// FIRST PROJECT
		{
			id: 1,
			taskComplete: false,
			project_id: 1,
			description:
				'Foam craft sticks,cut one for the wings in the front and for the back.',
		},
		{
			id: 2,
			taskComplete: false,
			project_id: 1,
			description: 'I used hot glue to glue on the fin on the back.',
		},
		{
			id: 3,
			taskComplete: false,
			project_id: 1,
			description:
				'That’s it! I thought they turned out pretty cute for a little quick kid’s craft!',
		},
		// SECOND PROJECT
		{
			id: 4,
			taskComplete: false,
			project_id: 2,
			description:
				'Start by choosing your colours – one large cupcake liner and one mini cupcake liner. Then flatten them out a little bit so they are easier to fold.',
		},
		{
			id: 5,
			taskComplete: false,
			project_id: 2,
			description:
				'Fold the cupcake liner in half. Then fold it in half again, again and again.',
		},
		{
			id: 6,
			taskComplete: false,
			project_id: 2,
			description:
				'Using a good pair of scissors, carefully cut a curve into the cupcake liner. I recommend starting your cut on the folded edge',
		},
		{
			id: 7,
			taskComplete: false,
			project_id: 2,
			description:
				'Then fold the mini cupcake liner the same way (fold four times) and cut the curve into it as well',
		},
		{
			id: 8,
			taskComplete: false,
			project_id: 2,
			description:
				'Gently shape the cupcake liners so the bright and bold colour is facing forward and the white side is facing the back. Attach the yellow cupcake liner to the pink cupcake liner with using a bit of crafter’s tape.',
		},
		{
			id: 9,
			taskComplete: false,
			project_id: 2,
			description:
				'And now my favourite part… attach a sticker rhinestone to the middle of the flower.',
		},
		{
			id: 10,
			taskComplete: false,
			project_id: 2,
			description:
				'Fold a piece of construction paper in by about 1.5 inches. Then cut out two leaf shapes on the fold.',
		},
		{
			id: 11,
			taskComplete: false,
			project_id: 2,
			description:
				'Use crafter’s tape to attach the leaves to the back of the popsicle stick and then attach the popsicle stick to the back of the flower.',
		},
		{
			id: 12,
			taskComplete: false,
			project_id: 2,
			description:
				'Flip it over and your simple cupcake liner flower is done!',
		},
	]);
};
