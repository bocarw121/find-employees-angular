import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';

function notFound(req: Request, res: Response) {
	const urlArr = req.url.split('/');
	res.status(StatusCodes.NOT_FOUND).json({
		message: `/${urlArr[urlArr.length - 1]} Route does not exist`,
	});
}

export default notFound;
