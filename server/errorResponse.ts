import { Response } from 'express';

export function errorResponse(
	res: Response,
	statusCode: number,
	message: string,
) {
	res.status(statusCode).json({ message });
}
