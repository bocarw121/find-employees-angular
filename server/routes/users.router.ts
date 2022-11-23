import { Router } from 'express';
import { validateUserId } from '../middleware/validateUser';
import {
	handleGetUser,
	handleGetUsers,
	handleUpdateUserHired,
} from './users.controller';

const usersRouter = Router();

usersRouter.get('/users', handleGetUsers);

usersRouter.get('/users/:id', validateUserId, handleGetUser);

usersRouter.put('/users/:id', validateUserId, handleUpdateUserHired);

export default usersRouter;
