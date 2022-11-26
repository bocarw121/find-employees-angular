import { HttpClient } from '@angular/common/http';
import { Employee } from '../../types';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
	selector: 'app-employees',
	templateUrl: './employees.component.html',
	styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
	users: Employee[] = [];
	user: Employee | null = null;
	baseUrl = '/api/employees';

	constructor(private http: HttpClient) {}
	ngOnInit(): void {
		this.http
			.get<Employee[]>(this.baseUrl)
			.subscribe((users) => (this.users = users));
	}

	getOneUser(id: number) {
		const url = `${this.baseUrl}/${id}`;
		this.http.get<Employee>(url).subscribe((user) => (this.user = user));
	}

	hireUser(id: number, companyName: string, start: Date) {
		const url = `${this.baseUrl}/${id}`;
		this.http.put(url, {
			'Content-type': 'application/json',
			body: JSON.stringify({
				name: companyName,
				start,
			}),
		});
	}
}
