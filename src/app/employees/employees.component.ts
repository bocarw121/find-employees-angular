import { HttpClient } from '@angular/common/http';
import { Employee } from '../../types';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-employees',
	templateUrl: './employees.component.html',
	styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
	employees: Employee[] = [];
	EmployeesService: Employee | null = null;
	baseUrl = '/api/employees';
	start: number = Date.now();

	constructor(private http: HttpClient) {}
	ngOnInit(): void {
		this.http
			.get<Employee[]>(this.baseUrl)
			.subscribe((employee) => (this.employees = employee));
	}
}
