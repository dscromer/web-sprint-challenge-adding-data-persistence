const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const projectRouter = require('./routes/projects/projects-route');

const server = express();
const port = process.env.PORT || 8080;
// 3rd party middleware
server.use(helmet());
server.use(express.json());
server.use(cors());

// WELCOME ROUTES
server.get('/', (req, res) => {
	res.json({
		msg: 'Welcome to da Projects AKA Node Sprint 2!',
	});
});
// CUSTOM ROUTES
server.use('/projects', projectRouter);

// ERROR HANDLING
server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		message: 'Oops, something went wrong',
	});
});

// Server Listening
server.listen(port, () => {
	console.log(`### Server running on: http://localhost:${port}`);
});