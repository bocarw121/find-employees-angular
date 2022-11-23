import * as express from 'express';
import * as morgan from 'morgan';
import usersRouter from './routes/users.router';

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use('/api', usersRouter);

const PORT = process.env['PORT'] || 8000;

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
