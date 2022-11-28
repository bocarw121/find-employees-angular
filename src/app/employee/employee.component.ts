import { DatePipe } from '@angular/common';
import { Employee } from './../../types';
import { Observable } from 'rxjs';
import { EmployeesService } from './../employees.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-employee',
	templateUrl: './employee.component.html',
	styleUrls: ['./employee.component.css'],
	providers: [DatePipe],
})
export class EmployeeComponent implements OnInit {
	employee$: Observable<Employee> | undefined;
	faLocation = faLocationDot;

	constructor(
		private route: ActivatedRoute,
		private heroService: EmployeesService,
		private employeeService: EmployeesService,
		private toast: ToastrService,
		private datePipe: DatePipe,
	) {}

	ngOnInit() {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		this.employee$ = this.heroService.getOneEmployee(id);
	}

	fireEmployee() {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		this.heroService.fireEmployee(id).subscribe();
		this.employee$ = this.heroService.getOneEmployee(id);
	}

	hireEmployee() {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		const company = localStorage.getItem('companyName');
		if (!company) {
			this.toast.error(
				'You must register your company to hire an employee',
			);
			return;
		}

		const date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

		this.employeeService
			.hireEmployee(id, company, date as string)
			.subscribe();

		this.employee$ = this.heroService.getOneEmployee(id);
	}
}
