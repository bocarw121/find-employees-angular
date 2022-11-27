import { Company } from '../../src/types';
import { Employees } from './Employee.schema';

export async function getAllEmployees() {
	const employees = await Employees.find();

	return employees;
}

export async function findEmployeeById(employeeId: number) {
	const employee = await Employees.findOne({ id: employeeId });

	return employee;
}

export async function updateEmployeeCompany(
	employeeId: number,
	company: Company,
) {
	const filter = {
		id: employeeId,
	};

	const update = { company };

	const result = await Employees.findOneAndUpdate(filter, update);

	return result;
}
