import { EmployeesService } from './../employees.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Employee } from 'src/types';

@Component({
	selector: 'app-hired',
	templateUrl: './hired.component.html',
	styleUrls: ['./hired.component.css'],
})
export class HiredComponent implements OnInit {
	employees: Employee[] | undefined;
	constructor(private employeesService: EmployeesService) {}

	ngOnInit(): void {
		this.employeesService
			.getAllEmployees()
			.pipe(
				map((employee) =>
					employee.filter((employee) => employee.company),
				),
			)
			.subscribe((employee) => (this.employees = employee));
	}
}
