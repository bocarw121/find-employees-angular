import { Employee } from './../../src/types';
import { Schema, model } from 'mongoose';

export const employeeSchema = new Schema<Employee>({
	id: String,
	name: String,
	username: String,
	email: String,
	address: {
		street: String,
		suite: String,
		city: String,
		zipcode: String,
		geo: {
			lat: String,
			lng: String,
		},
	},
	phone: String,
	website: String,
	company: {
		name: String,
		start: String,
	},
});

export const Employees = model('employees', employeeSchema);
