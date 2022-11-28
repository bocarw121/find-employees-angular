import { Router } from 'express';
import { validateEmployeeId } from '../../../middleware/validateEmployee';
import {
	handleGetEmployees,
	handleGetEmployee,
	handleUpdateEmployeeHired,
	handleFireEmployee,
} from './employees.controller';

const employeesRouter = Router();

employeesRouter.get('/', handleGetEmployees);

employeesRouter.get('/:id', validateEmployeeId, handleGetEmployee);

employeesRouter.patch(
	'/hire/:id',
	validateEmployeeId,
	handleUpdateEmployeeHired,
);

employeesRouter.patch('/fire/:id', validateEmployeeId, handleFireEmployee);

export default employeesRouter;
