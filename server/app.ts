import * as express from 'express';
import * as morgan from 'morgan';
import employeesRouter from './routes/api/employees/employees.router';
import * as cors from 'cors';
import notFound from './middleware/notFound';
import * as path from 'path';

import errorHandler from './middleware/errorHandler';
import apiRouter from './routes/api/api.router';

const app = express();

app.use(morgan('dev'));
app.use(cors({ origin: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

if (process.env['NODE_ENV'] === 'production') {
	app.get('/*', function (req, res) {
		res.sendFile(path.join(__dirname, 'public', 'index.html'));
	});
}

app.use(notFound);
app.use(errorHandler);

export default app;
