import { EmployeesService } from './../employees.service';
import { Employee } from './../../types';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { timer } from 'rxjs';

@Component({
	selector: 'app-hire-employee',
	templateUrl: './hire-employee.component.html',
	styleUrls: ['./hire-employee.component.css'],
	providers: [DatePipe],
})
export class HireEmployeeComponent implements OnInit {
	@Input() employee: Employee | undefined;

	companyFormControl = new FormControl('');

	constructor(
		private route: ActivatedRoute,
		private employeeService: EmployeesService,
		private location: Location,
		private toast: ToastrService,
		private datePipe: DatePipe,
	) {}

	ngOnInit(): void {
		const id = Number(this.route.snapshot.paramMap.get('id'));

		this.employeeService
			.getOneEmployee(id)
			.subscribe((employee) => (this.employee = employee));
	}

	submitCompanyName() {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		const company = this.companyFormControl.value;
		if (!company) {
			this.toast.error('Invalid company name');
			return;
		}

		const date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

		this.employeeService
			.hireEmployee(id, company, date as string)
			.subscribe();

		this.companyFormControl.setValue('');

		this.toast.success(`Congrats you hired ${this.employee?.name}!`);

		timer(3000).subscribe(() => {
			this.location.back();
		});
	}
}
