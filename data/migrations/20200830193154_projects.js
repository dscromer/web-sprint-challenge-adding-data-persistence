exports.up = async function (knex) {
	await knex.schema.createTable('projects', (table) => {
		table.increments('id');
		table.text('name').notNull();
		table.boolean('projectCompleted').defaultTo(false);
		table.text('description');
	});
	await knex.schema.createTable('tasks', (table) => {
		table.increments('id');
		table.text('description').notNull();
		table.text('notes');
		table.boolean('taskComplete').defaultTo(false).notNull();
		table
			.integer('project_id')
			.notNull()
			.references('id')
			.inTable('projects');
	});
	await knex.schema.createTable('resources', (table) => {
		table.increments('id');
		table.text('name').notNull().unique();
		table.text('description');
	});
	await knex.schema.createTable('project_resources', (table) => {
		table
			.integer('project_id')
			.notNull()
			.references('id')
			.inTable('projects');
		table
			.integer('resource_id')
			.notNull()
			.references('id')
			.inTable('resources');
		table.primary(['project_id', 'resource_id']);
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists('project_resources');
	await knex.schema.dropTableIfExists('resources');
	await knex.schema.dropTableIfExists('tasks');
	await knex.schema.dropTableIfExists('projects');
};