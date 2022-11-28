import { Component, Input, OnInit } from '@angular/core';

import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
	providers: [DatePipe],
})
export class RegisterComponent implements OnInit {
	@Input() company: string | undefined;

	companyFormControl = new FormControl('');

	constructor(private toast: ToastrService) {}

	ngOnInit(): void {
		return;
	}

	submitCompanyName() {
		const company = this.companyFormControl.value;

		if (!company) {
			this.toast.error('Invalid company name');
			return;
		}

		this.companyFormControl.setValue('');

		localStorage.setItem('companyName', company);

		this.toast.success("You've successfully registered");
	}
}
