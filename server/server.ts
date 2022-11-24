import * as express from 'express';
import * as morgan from 'morgan';
import usersRouter from './routes/users.router';
import * as cors from 'cors';

const app = express();

app.use(morgan('dev'));
app.use(cors({ origin: true }));
app.use(express.json());

app.use('/api', usersRouter);

const PORT = process.env['PORT'] || 8000;

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
