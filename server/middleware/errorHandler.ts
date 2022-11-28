/* eslint-disable @typescript-eslint/no-explicit-any */
import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';

interface HandlerErrors {
	status: string;
	errors: any;
	code: number;
	keyValue: string;
	value: string;
	statusCode: number;
}

function errorHandler(
	err: Error & HandlerErrors,
	_req: Request,
	res: Response,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	_next: NextFunction,
) {
	// Defaults
	const customError = {
		// If no status code is give default to an Internal status Error
		statusCode: err.status || StatusCodes.INTERNAL_SERVER_ERROR,
		message: err.message || 'Something went wrong, please try again',
	};

	if (err.name === 'ValidationError') {
		const errorArr = Object.values(err.errors) as any[];
		customError.message = errorArr.map((err) => err.message).join(',');

		customError.statusCode = StatusCodes.BAD_REQUEST;
	}

	if (err.code && err.code === 11000) {
		customError.message = `Duplicate value entered for ${Object.keys(
			err.keyValue,
		)} field, please choose another value`;
		customError.statusCode = StatusCodes.BAD_REQUEST;
	}

	if (err.name === 'CastError') {
		customError.message = `Invalid type: ${JSON.stringify(err.value)}`;
		customError.statusCode = StatusCodes.NOT_FOUND;
	}

	return res
		.status(customError.statusCode as number)
		.json({ message: customError.message });
}

export default errorHandler;
