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

	getOneEmployee(id: number): Observable<Employee> {
		const url = `${this.baseUrl}/${id}`;
		return this.http.get<Employee>(url);
	}

	hireEmployee(id: number, companyName: string, start: string) {
		const url = `${this.baseUrl}/${id}`;
		return this.http.put<Company>(url, {
			name: companyName,
			start,
		});
	}
}
