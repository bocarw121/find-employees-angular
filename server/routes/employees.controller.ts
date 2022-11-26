import { Request, Response } from 'express';
import { errorResponse } from '../errorResponse';
import { Company } from '../../src/types';
import {
	getAllEmployees,
	findEmployeeById,
	updateEmployeeCompany,
} from '../models/Employees';

export function handleGetEmployees(req: Request, res: Response) {
	return res.json(getAllEmployees());
}

export function handleGetEmployee(_req: Request, res: Response) {
	const { employeeId } = res.locals;

	const employee = findEmployeeById(employeeId);

	if (!employee) return errorResponse(res, 404, 'No user with that id');

	return res.json(employee);
}

export function handleUpdateEmployeeHired(req: Request, res: Response) {
	const { employeeId } = res.locals;
	const { name, start } = req.body as Company;

	if (!name || !start)
		return errorResponse(res, 400, 'You must fill in all fields');

	return res.json(updateEmployeeCompany(employeeId, { name, start }));
}
