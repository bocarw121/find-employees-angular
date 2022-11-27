import { Router } from 'express';
import { validateEmployeeId } from '../middleware/validateEmployee';
import {
	handleGetEmployees,
	handleGetEmployee,
	handleUpdateEmployeeHired,
	handleFireEmployee,
} from './employees.controller';

const employeesRouter = Router();

employeesRouter.get('/employees', handleGetEmployees);

employeesRouter.get('/employees/:id', validateEmployeeId, handleGetEmployee);

employeesRouter.patch(
	'/employees/:id',
	validateEmployeeId,
	handleUpdateEmployeeHired,
);

employeesRouter.patch('/employees/:id', validateEmployeeId, handleFireEmployee);

export default employeesRouter;
