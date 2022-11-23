import { Users } from '../userDb';
import { Company } from '../../src/types';

export function getAllUsers() {
	return Users;
}

export function findUserById(userId: number) {
	const index = userId - 1;
	const user = Users[index];

	if (user) return user;
	else return null;
}

export function updateUserCompany(userId: number, company: Company) {
	const index = userId - 1;
	const user = Users[index];

	user.company = company;

	return Users;
}
