import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import { Company } from '../../src/types';
import {
	getAllEmployees,
	findEmployeeById,
	updateEmployeeCompany,
} from '../models/Employees';
import { createCustomError } from '../errors/customApi';

export async function handleGetEmployees(req: Request, res: Response) {
	const employees = await getAllEmployees();

	return res.json(employees);
}

export async function handleGetEmployee(
	_req: Request,
	res: Response,
	next: NextFunction,
) {
	const { employeeId } = res.locals;

	const employee = await findEmployeeById(employeeId);

	if (!employee)
		return next(
			createCustomError('No user with that id', StatusCodes.BAD_REQUEST),
		);

	return res.json(employee);
}

export async function handleUpdateEmployeeHired(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const { employeeId } = res.locals;
	const { name, start } = req.body as Company;

	if (!name || !start) {
		return next(createCustomError('You must fill in all fields', 400));
	}

	try {
		const complete = await updateEmployeeCompany(employeeId, {
			name,
			start,
		});

		if (!complete) {
			return next(
				createCustomError(
					'No user with that id',
					StatusCodes.BAD_REQUEST,
				),
			);
		}

		return res.json({ message: 'successfully hired employee' });
	} catch (error) {
		next(error);
	}
}

export async function handleFireEmployee(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const { employeeId } = res.locals;

	try {
		const complete = await updateEmployeeCompany(employeeId, null);

		if (!complete) {
			return next(
				createCustomError(
					'No user with that id',
					StatusCodes.BAD_REQUEST,
				),
			);
		}

		return res.json({ message: 'successfully fired employee' });
	} catch (error) {
		next(error);
	}
}
