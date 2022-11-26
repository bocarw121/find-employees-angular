import { Employees } from '../employeeDb';
import { Company } from '../../src/types';

export function getAllEmployees() {
	return Employees;
}

export function findEmployeeById(employeeId: number) {
	const index = employeeId - 1;
	const employee = Employees[index];

	if (employee) return employee;
	else return null;
}

export function updateEmployeeCompany(employeeId: number, company: Company) {
	const index = employeeId - 1;
	const employee = Employees[index];

	employee.company = company;

	return Employees;
}
