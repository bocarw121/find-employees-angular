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

employeesRouter.put(
	'/employees/:id',
	validateEmployeeId,
	handleUpdateEmployeeHired,
);

employeesRouter.delete(
	'/employees/:id',
	validateEmployeeId,
	handleFireEmployee,
);

export default employeesRouter;
