const express = require('express');
const projectDB = require('./projects-model');

const router = express.Router();

// * routes
// add resources
router.post('/resources', validBodyForResources(), async (req, res, next) => {
	try {
		const resource = req.reSource;
		const resp = await projectDB.addResources(resource);

		res.status(201).json({
			resource_id: resp[0],
		});
	} catch (e) {
		next(e);
	}
});

router.get('/resources', async (req, res, next) => {
	try {
		const resources = await projectDB.getAllResources();

		res.status(200).json(resources);
	} catch (e) {
		next(e);
	}
});

// get resources by projectID
router.get('/:id/resources', async (req, res, next) => {
	try {
		const resources = await projectDB.getListOfResources(req.params.id);

		res.status(200).json(resources);
	} catch (e) {
		next(e);
	}
});

// add projects
router.post('', validBodyForProjects(), async (req, res, next) => {
	try {
		const project = req.project;
		const resp = await projectDB.addProject(project);

		res.status(201).json({
			project_id: resp[0],
		});
	} catch (e) {
		next(e);
	}
});
// get all projects
router.get('', async (req, res, next) => {
	try {
		const resp = await projectDB.getAllProjects();

		res.status(200).json(resp);
	} catch (e) {
		next(e);
	}
});

// add tasks
router.post('/:id/tasks', validBodyForTasks(), async (req, res, next) => {
	try {
		const task = req.task;
		const resp = await projectDB.addTasks(task);

		res.status(201).json({
			task_id: resp[0],
		});
	} catch (e) {
		next(e);
	}
});

router.get('/:id/tasks', async (req, res, next) => {
	try {
		const pTasks = await projectDB.getProjectTasks(req.params.id);

		res.status(200).json(pTasks);
	} catch (e) {
		next(e);
	}
});

function validBodyForResources() {
	return (req, res, next) => {
		if (!req.body) {
			return res.status(400).json({
				msg: 'missing content',
			});
		} else if (!req.body.name) {
			return res.status(400).json({
				msg: 'missing required field: name',
			});
		} else {
			req.reSource = {
				name: req.body.name,
				description:
					req.body.description || 'No resource description provided.',
			};
			next();
		}
	};
}
function validBodyForProjects() {
	return (req, res, next) => {
		if (!req.body) {
			return res.status(400).json({
				msg: 'missing content',
			});
		} else if (!req.body.name) {
			return res.status(400).json({
				msg: 'missing required field: name',
			});
		} else {
			req.project = {
				name: req.body.name,
				description:
					req.body.description || 'No project description provided.',
				projectCompleted: false,
			};
			next();
		}
	};
}
function validBodyForTasks() {
	return (req, res, next) => {
		if (!req.body) {
			return res.status(400).json({
				msg: 'missing content',
			});
		} else if (!req.body.description || !req.body.taskComplete) {
			return res.status(400).json({
				msg: 'missing required field: description, project_id',
			});
		} else {
			const p_id = req.params.id;
			req.task = {
				description: req.body.description,
				taskComplete: req.body.taskComplete || 'false',
				notes: req.body.notes || 'No notes provided.',
				project_id: p_id,
			};
			next();
		}
	};
}

// exports
module.exports = router;