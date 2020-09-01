const db = require('../../data/config');

function addResources(resourceOBJ) {
	return db('resources').insert(resourceOBJ);
}

function getListOfResources(projectID) {
	return db('project_resources as PR')
		.join('resources as R', 'R.id', 'PR.resource_id')
		.join('projects as P', 'P.id', 'PR.project_id')
		.where('P.id', projectID)
		.select(
			'P.name AS project_name',
			'R.id AS resource_id',
			'R.name AS resource_name',
			'R.description AS resource_description'
		);
}

function addProject(projectOBJ) {
	return db('projects').insert(projectOBJ);
}

function getAllProjects() {
	return db('projects');
}

function addTasks(taskOBJ) {
	return db('tasks').insert(taskOBJ);
}

function getProjectTasks(projectID) {
	return db('tasks as T')
		.join('projects as P', 'P.id', 'T.project_id')
		.where('P.id', projectID)
		.select(
			'P.name AS project_name',
			'P.description AS project_description',
			'T.id AS task_id',
			'T.notes AS task_notes',
			'T.description AS task_description',
			'T.taskComplete AS task_completed'
		)
		.orderBy('T.id', 'asc');
}

function getAllResources() {
	return db('resources');
}

module.exports = {
	addResources,
	getListOfResources,
	addProject,
	getAllProjects,
	addTasks,
	getProjectTasks,
	getAllResources,
};