import { Employee } from './../../types';
import { Observable } from 'rxjs';
import { EmployeesService } from './../employees.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-employee',
	templateUrl: './employee.component.html',
	styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
	employee$: Observable<Employee> | undefined;
	faLocation = faLocationDot;

	constructor(
		private route: ActivatedRoute,
		private heroService: EmployeesService,
	) {}

	ngOnInit() {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		this.employee$ = this.heroService.getOneEmployee(id);
	}
}
