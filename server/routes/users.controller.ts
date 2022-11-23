import { Request, Response } from 'express';
import { errorResponse } from '../errorResponse';
import { Company } from '../../src/types';
import { findUserById, getAllUsers, updateUserCompany } from '../models/User';

export function handleGetUsers(req: Request, res: Response) {
	return res.json(getAllUsers());
}

export function handleGetUser(_req: Request, res: Response) {
	const { userId } = res.locals;

	const user = findUserById(userId);

	if (!user) return errorResponse(res, 404, 'No user with that id');

	return res.json(user);
}

export function handleUpdateUserHired(req: Request, res: Response) {
	const { id } = req.params;
	const { name, start } = req.body as Company;

	const userId = Number(id);

	const isUserIdNotANumber = Number.isNaN(userId);

	if (isUserIdNotANumber) {
		return errorResponse(res, 400, 'The id must be a number');
	}

	if (!name || !start)
		return errorResponse(res, 400, 'You must fill in all fields');

	return res.json(updateUserCompany(userId, { name, start }));
}
