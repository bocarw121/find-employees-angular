import { NextFunction, Request, Response } from 'express';
import { errorResponse } from '../errorResponse';

export function validateEmployeeId(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const { id } = req.params;

	const employeeId = Number(id);

	const isEmployeeIdNotANumber = Number.isNaN(employeeId);

	if (isEmployeeIdNotANumber) {
		return errorResponse(res, 400, 'The id must be a number');
	}

	// Pass the validated userId to locals to be used in next middlewares
	res.locals['employeeId'] = employeeId;

	next();
}
