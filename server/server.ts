import * as http from 'http';

import app from './app';
import { connectDb } from './db/connect';

const PORT = process.env['PORT'] || 8000;

const server = http.createServer(app);

async function startServer() {
	try {
		connectDb();
	} catch (error) {
		console.log(error);
	}

	server.listen(PORT, () => {
		console.log(`Server is listening on port ${PORT}`);
	});
}

startServer();
