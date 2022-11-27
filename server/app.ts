import * as express from 'express';
import * as morgan from 'morgan';
import employeesRouter from './routes/employees.router';
import * as cors from 'cors';
import notFound from './middleware/notFound';
import * as path from 'path';

import errorHandler from './middleware/errorHandler';

const app = express();

app.use(morgan('dev'));
app.use(cors({ origin: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', employeesRouter);

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(notFound);
app.use(errorHandler);

export default app;
