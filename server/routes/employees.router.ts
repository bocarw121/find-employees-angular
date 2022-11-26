import { Router } from 'express';
import { validateEmployeeId } from '../middleware/validateEmployee';
import {
	handleGetEmployees,
	handleGetEmployee,
	handleUpdateEmployeeHired,
} from './employees.controller';

const employeesRouter = Router();

employeesRouter.get('/employees', handleGetEmployees);

employeesRouter.get('/employees/:id', validateEmployeeId, handleGetEmployee);

employeesRouter.put(
	'/employees/:id',
	validateEmployeeId,
	handleUpdateEmployeeHired,
);

export default employeesRouter;
