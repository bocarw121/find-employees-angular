import { EmployeesService } from './../employees.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	isOpen = JSON.parse(localStorage.getItem('isOpen') as string);

	constructor(private employeeService: EmployeesService) {}
	ngOnInit(): void {
		this.checkAvailability();
	}

	checkAvailability() {
		this.employeeService
			.getAllEmployees()
			.pipe(
				map((employees) =>
					employees.filter((employee) => employee.company),
				),
			)
			.subscribe(console.log);
	}
}
