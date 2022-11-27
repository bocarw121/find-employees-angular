import { Observable } from 'rxjs';
import { Company, Employee } from '../types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class EmployeesService {
	employees: Employee[] = [];
	employee: Employee | null = null;
	baseUrl = '/api/employees';

	constructor(private http: HttpClient) {}

	getAllEmployees() {
		return this.http.get<Employee[]>(this.baseUrl);
	}

	getOneEmployee(id: number): Observable<Employee> {
		const url = `${this.baseUrl}/${id}`;
		return this.http.get<Employee>(url);
	}

	hireEmployee(id: number, companyName: string, start: string) {
		const url = `${this.baseUrl}/${id}`;
		return this.http.patch<Company>(url, {
			name: companyName,
			start,
		});
	}

	fireEmployee(id: number) {
		const url = `${this.baseUrl}/${id}`;
		return this.http.patch(url, {
			headers: {
				'Content-Type': 'application/json',
			},
			body: null,
		});
	}
}
