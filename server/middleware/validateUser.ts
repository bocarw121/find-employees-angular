import { NextFunction, Request, Response } from 'express';
import { errorResponse } from '../errorResponse';

export function validateUserId(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const { id } = req.params;

	const userId = Number(id);

	const isUserIdNotANumber = Number.isNaN(userId);

	if (isUserIdNotANumber) {
		return errorResponse(res, 400, 'The id must be a number');
	}

	// Pass the validated userId to locals to be used in next middlewares
	res.locals['userId'] = userId;

	next();
}
