import * as express from 'express';
import * as morgan from 'morgan';
import employeesRouter from './routes/employees.router';
import * as cors from 'cors';

const app = express();

app.use(morgan('dev'));
app.use(cors({ origin: true }));
app.use(express.json());

app.use('/api', employeesRouter);

const PORT = process.env['PORT'] || 8000;

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
