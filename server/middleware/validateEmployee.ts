import { createCustomError } from '../errors/customApi';
import { NextFunction, Request, Response } from 'express';

export function validateEmployeeId(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const { id } = req.params;

	const employeeId = Number(id);

	const isEmployeeIdNotANumber = Number.isNaN(employeeId);

	if (isEmployeeIdNotANumber) {
		return next(createCustomError('The id must be a number', 400));
	}

	// Pass the validated userId to locals to be used in next middlewares
	res.locals['employeeId'] = employeeId;

	next();
}
