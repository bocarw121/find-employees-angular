import * as http from 'http';

import app from './app';
import { connectDb } from './db/connect';

const PORT = process.env['PORT'] || 8000;
const uri = process.env['MONGO_URI'] as string;

const server = http.createServer(app);

async function startServer() {
	await connectDb(uri);

	server.listen(PORT, () => {
		console.info(`Server is listening on port ${PORT}`);
	});
}

startServer();
